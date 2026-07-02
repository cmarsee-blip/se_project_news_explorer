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
}) {
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch}></SearchForm>
      {/* <h4>{searchResults[0]?.title}</h4> */}
      <NewsCardList
        articles={articles}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
        isSearchLoading={isSearchLoading}
        hasSearched={hasSearched}
      ></NewsCardList>

      {/* {articles.map((article) => (
        <NewsCard article={article} key={article.title}></NewsCard>
      ))} */}
      <About />
    </main>
  );
}

export default Main;
