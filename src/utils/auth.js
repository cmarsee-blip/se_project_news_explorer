import { handleServerResponse } from "./api";
import { baseUrl } from "./constants";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const signIn = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};

export const signUp = ({ email, username, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers,
    body: JSON.stringify({ username, email, password }),
  }).then(handleServerResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
