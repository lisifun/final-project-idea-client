import { SERVER_URL } from "./SERVER_URL";
import axios from "axios";

export const getTicket = (path) => {
  return axios.get(SERVER_URL + path, {});
};

export const postTicket = (path) => {};

export const putTicket = (path) => {};

export const deleteTicket = (path) => {};
