import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import NewsCardList from "../NewCardList/NewsCardList";

function Main({
  isLoggedIn,
  handleSearch,
  articles,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  return (
    <main>
      <SearchForm handleSearch={handleSearch}></SearchForm>
      {/* <h4>{searchResults[0]?.title}</h4> */}
      <NewsCardList
        articles={articles}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
      ></NewsCardList>

      {/* {articles.map((article) => (
        <NewsCard article={article} key={article.title}></NewsCard>
      ))} */}
      <About></About>
    </main>
  );
}

export default Main;
