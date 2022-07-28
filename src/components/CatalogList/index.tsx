import React from "react";
import {
  CatalogListDescription,
  CatalogListDisclaimer,
  CatalogListItems,
  CatalogListMenu,
  СatalogListIcon,
} from "./style";

type propType = {
  disclaimer: string;
  children: React.ReactNode;
  menu: React.ReactNode;
  searchValue: string;
  onSearchInputChange(event: React.FormEvent<HTMLInputElement>): void;
};

const CatalogList: React.FC<propType> = ({
  children,
  disclaimer,
  searchValue,
  onSearchInputChange,
  menu,
}) => {
  return (
    <div>
      <CatalogListDescription>
        <CatalogListDisclaimer>{disclaimer}</CatalogListDisclaimer>
        <СatalogListIcon />
        <input
          onChange={onSearchInputChange}
          value={searchValue}
          type="text"
          className="catalog-list__input"
          placeholder="Search all assessments"
        />
      </CatalogListDescription>
      <CatalogListMenu>{menu}</CatalogListMenu>
      <CatalogListItems>{children}</CatalogListItems>
    </div>
  );
};

export default CatalogList;
