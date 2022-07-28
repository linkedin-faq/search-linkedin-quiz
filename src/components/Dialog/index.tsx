import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogMain,
  DialogTitle,
  DialogWindow,
} from "./style";

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
        <DialogContent>{children}</DialogContent>
      </DialogWindow>
    </DialogMain>
  );
};

export default Dialog;
