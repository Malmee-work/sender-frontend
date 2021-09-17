import client from "../utils/fetch-client";

const login = async (credentials: {
  username: string;
  hashedPassword: string;
}): Promise<any> => {
  return client("sender/login", credentials);
};

export default login;
