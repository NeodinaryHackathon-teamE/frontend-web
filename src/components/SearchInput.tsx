import React from "react";
import "./_searchInput.scss";
import searchIcon from "../../assets/search-icon.svg";

const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="공덕역 명소 검색하기" />
      <img src={searchIcon} alt="검색 아이콘" className="icon" />
    </div>
  );
};

export default SearchInput;
