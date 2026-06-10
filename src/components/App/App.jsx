import { Routes, Route } from "react-router-dom";

import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
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
          <Footer></Footer>
        </div>
        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
      </div>
    </CurrentUserContext.Provider>
  );
}
