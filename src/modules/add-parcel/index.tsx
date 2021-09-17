import React, { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import addParcel from "../../data/add-parcel";
import { ParcelType } from "../../data/parcel-type";

interface Props {
  handleClose: () => void;
  handleSave: (parcel: ParcelType) => void;
}
// Add Parcel component shows a modal for adding a parcel
const AddParcel: React.FunctionComponent<Props> = ({ handleClose, handleSave }) => {
  const [pickupAddress, setPickupAddress] = useState<string>();
  const [dropoffAddress, setDropoffAddress] = useState<string>();

  const onPickUpAddressChange = async (event: any): Promise<void> => {
    setPickupAddress(event.target.value.trim());
  };

  const onDropOffAddressChange = async (event: any): Promise<void> => {
    setDropoffAddress(event.target.value.trim());
  };

  const onSave = async (): Promise<void> => {
    const response = await addParcel({ pickupAddress, dropoffAddress });
    console.log("response", response);
    handleSave(response);
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add parcel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text>Pick-up address</InputGroup.Text>
          <FormControl
            placeholder="Enter the pick up address of the parcel"
            type="text"
            onChange={onPickUpAddressChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Drop-off address</InputGroup.Text>
          <FormControl
            placeholder="Enter the drop off address of the parcel"
            type="text"
            onChange={onDropOffAddressChange}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="secondary"
          onClick={onSave}
          disabled={!pickupAddress || !dropoffAddress}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddParcel;
