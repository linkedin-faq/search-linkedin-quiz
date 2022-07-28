import React from "react";
import { DialogHeader, DialogMain, DialogTitle, DialogWindow } from "./style";

type propType = {
  title: string;
  children: React.ReactNode;
};

const Dialog: React.FC<propType> = ({ title, children }) => {
  return (
    <DialogMain>
      <DialogWindow>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="dialog__content">{children}</div>
      </DialogWindow>
    </DialogMain>
  );
};

export default Dialog;
