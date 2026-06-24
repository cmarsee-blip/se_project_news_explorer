import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useState } from "react";

function NewsCardList({ articles, searchResult }) {
  const mockArticle = {
    source: { name: "source" },
    title: "title",
    publishedAt: "date",
    description: "description",
    urlToImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png",
  };

  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <div className="news-card__list">
      {articles.slice(0, cardsDisplayed).map((article) => (
        <NewsCard article={article} key={article.title} />
      ))}
      <button
        className={`news__cards-button ${
          cardsDisplayed >= searchResult.length ? "hidden" : ""
        }`}
        onClick={increaseVisibleCards}
      >
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
