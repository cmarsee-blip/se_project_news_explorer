const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = "e32c2627ad364717ad2555081a71e7f7";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.error}`);
};

// backend API base (change to your backend URL / production hostname)
// const apiBaseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://your-production-backend.example.com" // replace with real prod backend
//     : "http://localhost:3001";

export { newsApiBaseUrl, apiKey, checkResponse };
