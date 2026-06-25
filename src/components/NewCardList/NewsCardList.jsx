import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useContext, useState } from "react";

function NewsCardList({ articles, handleSaveArticle }) {
  //   const mockArticle = {
  //     source: { name: "source" },
  //     title: "title",
  //     publishedAt: "date",
  //     description: "description",
  //     urlToImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png",
  //   };

  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <>
      <div className="news-card__list">
        {articles.slice(0, cardsDisplayed).map((article) => (
          <NewsCard
            article={article}
            key={article.title}
            handleSaveArticle={handleSaveArticle}
          />
        ))}
      </div>
      {articles.length > 0 && (
        <button
          className={`news-cards__btn ${
            cardsDisplayed >= articles.length ? "hidden" : ""
          }`}
          onClick={increaseVisibleCards}
        >
          Show more
        </button>
      )}
    </>
  );
}

export default NewsCardList;
