import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewCardList/NewsCardList";

function Main({
  articles,
  handleRemoveArticle,
  handleSaveArticle,
  isSearchLoading,
  hasSearched,
  searchError,
}) {
  return (
    <main className="main">
      <NewsCardList
        articles={articles}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
        isSearchLoading={isSearchLoading}
        hasSearched={hasSearched}
        searchError={searchError}
      ></NewsCardList>
      <About />
    </main>
  );
}

export default Main;
