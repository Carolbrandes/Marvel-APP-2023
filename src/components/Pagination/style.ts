import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  padding: 20px 0;

  .pagination {
    display: flex;
    padding: 0;
    list-style-type: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .page-item {
    padding: 5px 15px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:first-of-type,
    &:last-of-type {
      border: none;
    }

    &.active {
      background: #000;
      color: #fff;
    }
  }
`;
