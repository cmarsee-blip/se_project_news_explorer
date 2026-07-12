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

export { newsApiBaseUrl, apiKey, checkResponse };
