import React from "react";
import { ParcelStatusMap, ParcelType } from "../../data/parcel-type";

interface Props {
  parcel: ParcelType;
}

const ParcelItem: React.FunctionComponent<Props> = ({ parcel }) => {
  return (
    <tr>
      <td>{parcel.pickupAddress}</td>
      <td>{parcel.dropoffAddress}</td>
      <td>{parcel.pickupTime}</td>
      <td>{parcel.dropoffTime}</td>
      <td>{parcel.status && ParcelStatusMap.get(parcel.status)}</td>
    </tr>
  );
};

export default ParcelItem;
