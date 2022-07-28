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

export const CatalogListDisclaimer = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 20px;
  grid-area: disclaimer;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
  }
`;

export const CatalogListMenu = styled.div`
  padding-top: 12px;
`;

export const CatalogListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
