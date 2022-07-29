import styled from "styled-components";

export const SortingItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SortingMenuItems = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const SortingButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background: transparent;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: #057642;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const MenuItemContentTypeActive = styled.button`
  background-color: #057642;
  color: #fff;
`;
