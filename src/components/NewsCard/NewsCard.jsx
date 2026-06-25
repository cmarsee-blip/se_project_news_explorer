import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NewsCard.css";
import CurrentPageContext from "../../contexts/currentPageContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import KeywordContext from "../../contexts/keyWordContext";
import SavedArticlesContext from "../../contexts/SavedArticlesContext";

function NewsCard({ article, handleSaveArticle, newsData }) {
  console.log(newsData);
  const { source, title, publishedAt, description, urlToImage } = article || {};

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : "";

  const handleBookmarkClick = () => {
    handleSaveArticle({ newsData: article, keyword });
  };

  const handleRemoveClick = () => {
    handleRemoveArticle(newsData);
  };

  const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  };

  const currentPage = useContext(CurrentPageContext);
  const [isHovered, setIsHovered] = useState(false);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  const { keyword } = useContext(KeywordContext);

  console.log(currentPage);

  return (
    <article className="news-card">
      {currentPage === "/saved-news" && (
        <>
          <h3 className="news-card__keyword">
            {capitalizeFirstLetter(article.keyword)}
          </h3>
          <p
            className={`news-card__popup-text ${
              isHovered ? "" : "news-card__popup-text_hidden"
            }`}
          >
            Remove from saved
          </p>
          <button
            className="news-card__btn-delete"
            onClick={handleRemoveClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </>
      )}

      {isLoggedIn && currentPage === "/" ? (
        <button
          className={`news-card__btn-bookmark ${
            savedArticles.some(
              (savedArticles) => savedArticles.link === article.url,
            )
              ? "news-card__btn-bookmark_clicked"
              : ""
          }`}
          // onClick={handleBookmarkClick}
          onClick={
            savedArticles.some(
              (savedArticles) => savedArticles.link === article.url,
            )
              ? handleRemoveClick
              : handleBookmarkClick
          }
        />
      ) : (
        ""
      )}
      {!isLoggedIn && (
        <>
          <div className="news-card__save">
            <p
              className={`news-card__popup-text ${
                isHovered ? "" : "news-card__popup-text_hidden"
              }`}
            >
              Sign in to save articles
            </p>
          </div>
          <button
            className="news-card__btn-bookmark"
            onClick={handleBookmarkClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}
      <a>
        {" "}
        {urlToImage ? (
          <img
            className="news-card__image"
            src={urlToImage}
            alt={title || "Article image"}
          />
        ) : (
          <div
            className="news-card__image news-card__image_placeholder"
            aria-hidden="true"
          />
        )}
        <div className="news-card__body">
          <p className="news-card__date">{formattedDate}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">{description}</p>
          <div className="news-card__meta">
            <span className="news-card__source">{source?.name}</span>
          </div>
        </div>
      </a>
    </article>
  );
}

NewsCard.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({ name: PropTypes.string }),
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string,
  }),
  //   .isRequired,
};

export default NewsCard;
