import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import getParcels from "../../data/get-parcels";
import { ParcelType } from "../../data/parcel-type";
import { useInterval } from "../../hooks/useInterval";
import AddParcel from "../add-parcel";
import ParcelItem from "./parcel-item";

// Parcel component shows all the parcels of the sender
const Parcel: React.FunctionComponent = () => {
  const delay = 100000;
  const [showAddParcel, setShowAddParcel] = useState<boolean>();
  const [parcels, setParcels] = useState<Array<ParcelType>>();
  const onLogoutSubmit = (): void => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClose = (): void => {
    setShowAddParcel(false);
  };

  const fetchParcels = async (): Promise<void> => {
    const allParcels = await getParcels();
    setParcels(allParcels);
  };

  const handleSave = (parcel: ParcelType): void => {
    const existingParcels = parcels ? [...parcels] : [];
    existingParcels.push(parcel);
    setParcels(existingParcels);
    setShowAddParcel(false);
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  useInterval(() => {
    fetchParcels();
  }, delay);

  return (
    <div>
      {showAddParcel && (
        <AddParcel handleClose={handleClose} handleSave={handleSave} />
      )}
      <div className="add-parcel">
        <Button variant="secondary" onClick={(): void => setShowAddParcel(true)}>
          Add parcel
        </Button>
      </div>
      <div className="logout">
        <Button variant="secondary" onClick={onLogoutSubmit}>
          Logout
        </Button>
      </div>
      <div className="parcel">
        <p className="title">Your Parcels</p>
        <div>
          {parcels ? (
            <Table responsive variant="dark">
              <thead>
                <tr>
                  <th>Pick-up address</th>
                  <th>Drop-off address</th>
                  <th>Pick-up time</th>
                  <th>Drop-off time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel) => (
                  <ParcelItem key={parcel.id} parcel={parcel} />
                ))}
              </tbody>
            </Table>
          ) : (
            <div>You have not added any parcels</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parcel;
