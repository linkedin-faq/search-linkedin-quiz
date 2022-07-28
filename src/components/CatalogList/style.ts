import styled from "styled-components";

export const СatalogListIcon = styled.div`
  order: -1;
  margin-bottom: 16px;
  grid-area: icon;

  @media (min-width: 768px) {
    order: initial;
    margin-bottom: 0;
    margin-left: auto;
  }
`;

export const CatalogListDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "disclaimer icon"
      "input icon";
    gap: 8px;
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
