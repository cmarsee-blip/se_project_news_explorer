import NewsCardList from "../NewCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

export default function Profile({ handleSaveArticle, articles }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profile">
      <div className="profile__title">Saved Articles</div>
      <div className="profile__description">
        {currentUser?.name || "Cody"}, you have 5 saved articles
      </div>
      <div className="profile__keywords">By keywords:</div>
      <NewsCardList
        articles={articles}
        handleSaveArticle={handleSaveArticle}
        // handleRemoveArticle={handleRemoveArticle}
      ></NewsCardList>
    </section>
  );
}
