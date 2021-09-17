import client from "../utils/fetch-client";
import { ParcelType } from "./parcel-type";

const addParcel = async (parcel: ParcelType): Promise<any> => {
  return client("parcel", parcel);
};

export default addParcel;
