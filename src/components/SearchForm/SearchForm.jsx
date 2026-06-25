import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchInput);
  }

  const handleInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  return (
    <section className="searchForm">
      <div className="searchForm__title">What's going on in the world?</div>
      <p className="searchForm__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="searchForm__form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="search-input" className="searchForm__label">
          {/* <span className="visually-hidden">Search</span> */}
          <input
            id="search-input"
            name="search"
            type="text"
            className="searchForm__input"
            placeholder="Enter topic"
            onChange={handleInputChange}
            required
            aria-label="Search for news"
          />
        </label>
        <button type="submit" className="searchForm__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
