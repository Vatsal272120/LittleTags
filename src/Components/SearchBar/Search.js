import React from "react";
import {
  SearchBarWrapper,
  SearchInner,
  SearchForm,
  Search_SearchBar,
} from "./Styles";

const SearchBar = ({ showSearch, toggle }) => {
  return (
    <SearchBarWrapper showSearch={showSearch}>
      <h1>Hello</h1>
      <SearchInner>
        <Search_SearchBar>
          <SearchForm></SearchForm>
        </Search_SearchBar>
      </SearchInner>
    </SearchBarWrapper>
  );
};

export default SearchBar;
