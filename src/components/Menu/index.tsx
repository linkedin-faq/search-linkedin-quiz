import React from "react";
import { MenuItem, MenuItems } from "./style";

type propType = {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
};

const Menu: React.FC<propType> = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="menu">
      {items.length > 0 && (
        <MenuItems>
          {items.map((item) => (
            <MenuItem key={item}>
              <button
                className={`menu__item-content ${
                  activeItem === item ? "menu__item-content_type_active" : ""
                }`}
                type="button"
                onClick={(): void => onItemClick(item)}
              >
                {item}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </div>
  );
};

export default Menu;
