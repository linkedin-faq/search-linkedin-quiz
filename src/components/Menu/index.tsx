import React from "react";
import { MenuItem, MenuItemContent, MenuItems } from "./style";

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
              <MenuItemContent onClick={(): void => onItemClick(item)}>
                {item}
              </MenuItemContent>
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </div>
  );
};

export default Menu;
