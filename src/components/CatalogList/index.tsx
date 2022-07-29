import React from "react";
import {
  CatalogListDescription,
  CatalogListDisclaimer,
  CatalogListInput,
  CatalogListItems,
  CatalogListMenu,
  СatalogListIcon,
} from "./style";
import CatalogIcon from "../../assets/catalog-list-icon.svg";

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
        <СatalogListIcon src={CatalogIcon} alt="Catalog list icon" />
        <CatalogListInput
          onChange={onSearchInputChange}
          value={searchValue}
          type="text"
          placeholder="Search all assessments"
        />
      </CatalogListDescription>
      <CatalogListMenu>{menu}</CatalogListMenu>
      <CatalogListItems>{children}</CatalogListItems>
    </div>
  );
};

export default CatalogList;
