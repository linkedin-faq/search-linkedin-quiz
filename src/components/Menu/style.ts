import styled from "styled-components";

export const MenuItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const MenuItemContentTypeActive = styled.div`
  background-color: #057642;
  color: #fff;
`;

export const CatalogListMenu = styled.div`
  padding-top: 12px;
`;

export const CatalogListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
