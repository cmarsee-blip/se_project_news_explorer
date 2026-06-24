import { handleServerResponse } from "./api";
import { newsApiBaseUrl } from "./constants";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// export const signIn = async ({ email, password }) => {
//   return fetch(`${newsApiBaseUrl}/signin`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ email, password }),
//   }).then(handleServerResponse);
// };

// export const signUp = async ({ email, username, password }) => {
//   return fetch(`${newsApiBaseUrl}/signup`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ username, email, password }),
//   }).then(handleServerResponse);
// };

export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};

// export const checkToken = (token) => {
//   return fetch(`${newsApiBaseUrl}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   }).then(handleServerResponse);
// };
