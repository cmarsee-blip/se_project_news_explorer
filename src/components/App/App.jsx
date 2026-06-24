import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import { getNews } from "../../utils/NewsApi";
import NewsCard from "../NewsCard/NewsCard";
// import { signIn, signUp, checkToken } from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import bg from "../../assets/bg-image.svg";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import CurrentPageContext from "../../contexts/currentPageContext";
import SavedArticlesContext from "../../contexts/SavedArticlesContext";
import KeywordContext from "../../contexts/keyWordContext";
import {
  getSavedArticles,
  removeSavedArticle,
  addSavedArticle,
} from "../../utils/api";
import { checkToken, authorize } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleLogInClick = () => {
    setActiveModal("signin-user");
  };

  const handleSignUpClick = () => {
    setActiveModal("register-user");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRemoveArticle = ({ newsData }) => {
    removeSavedArticle(newsData)
      .then(() => {
        const unsavedNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id,
        );
        setSavedArticles(unsavedNewsArticles);
        localStorage.setItem(
          "savedArticles",
          JSON.stringify(unsavedNewsArticles),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (userInput) => {
    const searchNews = getNews(userInput);
    searchNews.then((data) => {
      setSearchResults(data.articles);
    });
  };

  const handleSaveArticle = ({ newsData, keyword }) => {
    const isArticleSaved = savedArticles.some(
      (article) => article.link === newsData.url,
    );

    const updateSearchResult = (newArticle) => {
      const updatedSearchResult = searchResult.map((article) =>
        article.url === newsData.url ? newArticle : article,
      );
      setSearchResult(updatedSearchResult);
    };

    if (!isArticleSaved) {
      addSavedArticle(newsData, keyword)
        .then((res) => {
          const newArticle = { ...newsData, _id: res._id };
          const updatedSavedArticles = [res, ...savedArticles];
          setSavedArticles(updatedSavedArticles);
          localStorage.setItem(
            "savedArticles",
            JSON.stringify(updatedSavedArticles),
          );
          updateSearchResult(newArticle);
        })
        .catch((err) => console.error(err));
    } else {
      removeSavedArticle(newsData)
        .then(() => {
          const unsavedArticles = savedArticles.filter(
            (article) => article._id !== newsData._id,
          );
          setSavedArticles(unsavedArticles);
          localStorage.setItem(
            "savedArticles",
            JSON.stringify(unsavedArticles),
          );
          updateSearchResult({ ...newsData, _id: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  const checkUserToken = async () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const userData = await checkToken(token);
      console.log(userData);
      if (userData) {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      }
    } catch (error) {
      localStorage.removeItem("jwt");
      console.error("Token validation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoggedInLoading(true);
    checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res.data);
          getSavedArticles()
            .then((articles) => {
              setSavedArticles(articles);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoggedInLoading(false);
      });
  }, [isLoggedIn]);

  const handleLogin = async (userData) => {
    try {
      // const response = await signIn(userData);
      // localStorage.setItem("jwt", response.token);
      // const user = await checkToken(response.token);
      setCurrentUser(userData);
      setIsLoggedIn(true);
      closeActiveModal();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleRegistration = async (userData) => {
    try {
      await signUp(userData);
      // show the success modal and let the user navigate to Sign in
      setActiveModal("register-success");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  console.log(searchResults[0]);
  return (
    <CurrentPageContext.Provider value={currentPage}>
      <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
        <SavedArticlesContext.Provider
          value={{ savedArticles, setSavedArticles }}
        >
          <KeywordContext.Provider value={{ keyword, setKeyword }}>
            <div
              className="page"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="page__content">
                <Header
                  handleLogInClick={handleLogInClick}
                  isLoggedIn={isLoggedIn}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        articles={searchResults}
                        handleSearch={handleSearch}
                        handleSaveArticle={handleSaveArticle}
                        handleRemoveArticle={handleRemoveArticle}
                      />
                    }
                  />
                  <Route
                    path="/saved-news"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
                {/* <SearchForm handleSearch={handleSearch}></SearchForm>
          <NewsCard>Just some random text</NewsCard>
          <About></About> */}

                <Footer>2026 Supersite, Powered by News API</Footer>
              </div>
              <LoginModal
                isOpen={activeModal === "signin-user"}
                onClose={closeActiveModal}
                onLoginUser={handleLogin}
                handleSignUpClick={handleSignUpClick}
              ></LoginModal>
              <RegisterModal
                isOpen={activeModal === "register-user"}
                onClose={closeActiveModal}
                onRegisterUser={handleRegistration}
                handleLogInClick={handleLogInClick}
              ></RegisterModal>
              <RegistrationSuccessModal
                isOpen={activeModal === "register-success"}
                onClose={closeActiveModal}
                onSignInClick={() => setActiveModal("signin-user")}
              />
            </div>
          </KeywordContext.Provider>
        </SavedArticlesContext.Provider>
      </CurrentUserContext.Provider>
    </CurrentPageContext.Provider>
  );
}

export default App;
