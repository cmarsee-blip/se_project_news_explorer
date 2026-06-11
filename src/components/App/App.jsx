import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import { signIn, checkToken } from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogInClick = () => {
    setActiveModal("signin-user");
  };

  const closeActiveModal = () => {
    setActiveModal("");
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

  const handleLogin = async (userData) => {
    try {
      const response = await signIn(userData);
      localStorage.setItem("jwt", response.token);
      const user = await checkToken(response.token);
      setCurrentUser(user);
      setIsLoggedIn(true);
      closeActiveModal();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header handleLogInClick={handleLogInClick} />
          <About />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer>2026 Supersite, Powered by News API</Footer>
        </div>
        <LoginModal
          isOpen={activeModal === "signin-user"}
          onClose={closeActiveModal}
          onLoginUser={handleLogin}
        ></LoginModal>
        <RegisterModal></RegisterModal>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
