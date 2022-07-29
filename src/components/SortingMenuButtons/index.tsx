import React from "react";
import { SortingMenuItems, SortingButton, SortingItems } from "./style";

type propType = {
  items: string[];
  onItemClick: (item: string) => void;
};

const SortingMenuButtons: React.FC<propType> = ({ items, onItemClick }) => {
  return (
    <>
      {items.length > 0 && (
        <SortingItems>
          {items.map((item) => (
            <SortingMenuItems key={item}>
              <SortingButton onClick={(): void => onItemClick(item)}>
                {item}
              </SortingButton>
            </SortingMenuItems>
          ))}
        </SortingItems>
      )}
    </>
  );
};

export default SortingMenuButtons;
