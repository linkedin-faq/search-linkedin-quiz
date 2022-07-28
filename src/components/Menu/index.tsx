import React from "react";

type propType = {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
};

const Menu: React.FC<propType> = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="menu">
      {items.length > 0 && (
        <ul className="menu__items">
          {items.map((item) => (
            <li className="menu__item" key={item}>
              <button
                className={`menu__item-content ${
                  activeItem === item ? "menu__item-content_type_active" : ""
                }`}
                type="button"
                onClick={(): void => onItemClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
