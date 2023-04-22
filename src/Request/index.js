import axios from "axios";
const HOST_NAME = "https://stagingapi.enalo.in/";
export const Request = async ({ method, endpoint, data }) => {
  return await axios({
    method: method,
    url: HOST_NAME + endpoint,
    data: data,
  })
    .then((res) => res)
    .catch((err) => err);
};
