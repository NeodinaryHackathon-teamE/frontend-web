import React from "react";
import styles from "./SearchInput.module.scss";
import searchIcon from "../assets/search-icon.svg";

const SearchInput = () => {
  return (
    <div className={styles["search-input"]}>
      <img src={searchIcon} alt="검색 아이콘" className="icon" />
      <input type="text" placeholder="제보할 장소 검색하기" />
    </div>
  );
};

export default SearchInput;
