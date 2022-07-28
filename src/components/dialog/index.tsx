import React from "react";
import { DialogHeader, DialogMain, DialogTitle, DialogWindow } from "./style";

type propType = {
  title: string;
};

const Dialog: React.FC<propType> = ({ title }) => {
  return (
    <DialogMain>
      <DialogWindow>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
      </DialogWindow>
    </DialogMain>
  );
};

export default Dialog;
