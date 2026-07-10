import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import bg from "../../assets/bg-image.svg";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import NewsCardList from "../NewCardList/NewsCardList";

function Main({
  isLoggedIn,
  handleSearch,
  articles,
  handleRemoveArticle,
  handleSaveArticle,
  isSearchLoading,
  hasSearched,
  searchError,
}) {
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch}></SearchForm>
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
