import NewsCardList from "../NewCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

export default function Profile({
  handleSaveArticle,
  articles,
  handleRemoveArticle,
}) {
  const currentUser = useContext(CurrentUserContext);
  const articlesCount = articles.length;
  const savedKeywords = articles.map((article) => article.keyword);
  const uniqueSavedKeywords = [...new Set(savedKeywords)];
  const formatted = uniqueSavedKeywords.map(
    (uniqueSavedKeyword) =>
      uniqueSavedKeyword.charAt(0).toUpperCase() + uniqueSavedKeyword.slice(1),
  );

  console.log(formatted);
  console.log(uniqueSavedKeywords);

  return (
    <section className="profile">
      <div className="profile__title">Saved Articles</div>
      <div className="profile__description">
        {currentUser?.name || "Cody"}, you have {articlesCount} saved articles
      </div>
      <div className="profile__keywords">
        By keywords: {formatted.splice(0, 3).join(", ")}
        {uniqueSavedKeywords.length > 3 &&
          ` and ${uniqueSavedKeywords.length - 3} other(s)`}
      </div>
      <NewsCardList
        articles={articles}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
      ></NewsCardList>
    </section>
  );
}
