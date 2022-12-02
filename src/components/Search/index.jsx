import React from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import search from "../../img/icons/search.svg";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { hashLinks } from "../../consts/consts";

const Search = () => {
  const [isSearchVisible, setIisSearchVisible] = useState(false);
  const showSearch = () => {
    setIisSearchVisible((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleOnSelect = (item) => {
    navigate(item.path);
  };

  const formatResult = (item) => (
    <div className="search__item">{item.name}</div>
  );

  return (
    <>
      {isSearchVisible && (
        <>
          <div className="header-search__wrapper">
            <ReactSearchAutocomplete
              placeholder="Search"
              className="header-search__input"
              items={hashLinks}
              onSelect={handleOnSelect}
              autoFocus
              showIcon={false}
              styling={{
                width: "100%",
                fontSize: "16px",
                padding: "10px",
                border: "1px solid #ddd",
                height: "40px",
                borderRadius: "0px",
              }}
              formatResult={formatResult}
            />
          </div>
        </>
      )}
      <img
        className="header-search__icon"
        onClick={showSearch}
        src={search}
        alt=""
      />
    </>
  );
};

export default Search;
