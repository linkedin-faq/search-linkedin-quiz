import React from "react";
import { Button, Items, MenuItems } from "./style";

type propType = {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
};

const SortingMenuButtons: React.FC<propType> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <>
      {items.length > 0 && (
        <Items>
          {items.map((item) => (
            <MenuItems key={item}>
              {activeItem === item ? (
                <Button
                  onClick={(): void => onItemClick(item)}
                  style={{ backgroundColor: "#057642", color: "#fff" }}
                >
                  {item}
                </Button>
              ) : (
                <Button onClick={(): void => onItemClick(item)}>{item}</Button>
              )}
            </MenuItems>
          ))}
        </Items>
      )}
    </>
  );
};

export default SortingMenuButtons;
