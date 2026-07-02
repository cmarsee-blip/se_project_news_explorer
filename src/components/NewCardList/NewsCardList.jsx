import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./NewsCardList.css";
import { useContext, useState } from "react";
import CurrentPageContext from "../../contexts/currentPageContext";
import NothingFound from "../../assets/not-found_v1.png";

function NewsCardList({
  articles,
  handleSaveArticle,
  handleRemoveArticle,
  isSearchLoading,
  hasSearched,
}) {
  //   const mockArticle = {
  //     source: { name: "source" },
  //     title: "title",
  //     publishedAt: "date",
  //     description: "description",
  //     urlToImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png",
  //   };

  const currentPage = useContext(CurrentPageContext);
  const isSavedNewsPage = currentPage === "/saved-news";
  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <div className="news-card__list_content">
      {isSearchLoading && <Preloader />}

      {!isSearchLoading && articles.length > 0 && !isSavedNewsPage && (
        <h2 className="news-card__header">Search results</h2>
      )}

      {!isSearchLoading && hasSearched && articles.length <= 0 && (
        <div className="news-card__nothing-found_container">
          <img
            src={NothingFound}
            alt="Nothing found"
            className="news-card__nothing-found_image"
          />
          <h2 className="news-card__nothing-found">Nothing found</h2>
          <h3 className="news-card__nothing-found_subtitle">
            Sorry, but nothing matched your search terms
          </h3>
        </div>
      )}

      {!isSearchLoading && (
        <div className="news-card__list">
          {(isSavedNewsPage ? articles : articles.slice(0, cardsDisplayed)).map(
            (article) => (
              <NewsCard
                article={article}
                key={article.title}
                handleSaveArticle={handleSaveArticle}
                handleRemoveArticle={handleRemoveArticle}
              />
            ),
          )}
        </div>
      )}

      {!isSearchLoading && articles.length > 0 && !isSavedNewsPage && (
        <button
          className={`news-cards__btn ${
            cardsDisplayed >= articles.length ? "hidden" : ""
          }`}
          onClick={increaseVisibleCards}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
