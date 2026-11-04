import { apiKey, checkResponse } from "./constants";

let currentDate = new Date().toLocaleDateString("default", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const getPreviousWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

export function getNews(userInput) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${userInput}&from=${getPreviousWeek}&to=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`,
  ).then(checkResponse);
}
