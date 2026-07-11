const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const signUp = ({ email, username, password }) => {
  return new Promise((resolve, reject) => {
    if (email === "taken@example.com") {
      reject(new Error("This email is not available"));
      return;
    }
    resolve({
      data: { name: username, email, _id: "fake-signup-id" },
    });
  });
};

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
