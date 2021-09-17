import React from "react";
import Login from "./login";
import useToken from "../hooks/useToken";
import Parcel from "./parcel";

const Dashboard: React.FunctionComponent = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return <Parcel />;
};

export default Dashboard;
