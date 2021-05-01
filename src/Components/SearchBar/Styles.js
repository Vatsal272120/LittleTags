import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SearchBarWrapper = styled.div`
  position: absolute;
  margin-top: 70px;
  --header-height: 77px;
  width: 100%;
  overflow: hidden;
  transition: 0.2s ease-in-out;

  transform: translateY(0);
`;

export const SearchInner = styled.div`
  @media screen and (min-width: 641px) {
    .SeachInner {
      padding: 28px 50px;
    }
  }

  max-height: calc(100vh - var(--header-height) - 88px);
  overflow: auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  background: white;
  line-height: 1.65;
`;

export const Search_SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`;
