export const signUp = ({ email, username }) => {
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

export const authorize = () => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = () => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};
