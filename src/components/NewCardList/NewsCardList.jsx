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
  searchError,
}) {
  const currentPage = useContext(CurrentPageContext);
  const isSavedNewsPage = currentPage === "/saved-news";
  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  const shouldRender = isSavedNewsPage || isSearchLoading || hasSearched;

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="news-cards-list">
      {isSearchLoading && <Preloader />}

      {!isSearchLoading && searchError && (
        <div className="news-cards-list__error-container">
          <h2 className="news-cards-list__error">
            Sorry, something went wrong during the request. Please try again
            later.
          </h2>
        </div>
      )}

      {!isSearchLoading &&
        !searchError &&
        articles.length > 0 &&
        !isSavedNewsPage && (
          <h2 className="news-cards-list__header">Search results</h2>
        )}

      {!isSearchLoading &&
        !searchError &&
        hasSearched &&
        articles.length <= 0 && (
          <div className="news-cards-list__nothing-found-container">
            <img
              src={NothingFound}
              alt="No search results found"
              className="news-cards-list__nothing-found-image"
            />
            <h2 className="news-cards-list__nothing-found">Nothing found</h2>
            <h3 className="news-cards-list__nothing-found-subtitle">
              Sorry, but nothing matched your search terms
            </h3>
          </div>
        )}

      {!isSearchLoading && !searchError && (
        <div className="news-cards-list__items">
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

      {!isSearchLoading &&
        !searchError &&
        articles.length > 0 &&
        !isSavedNewsPage && (
          <button
            className={`news-cards-list__btn ${
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
