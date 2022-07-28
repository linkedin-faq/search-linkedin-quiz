import React from "react";
import { Main } from "./style";

type propType = {
  children: React.ReactNode;
};

const Page: React.FC<propType> = ({ children }) => {
  return (
    <div className="page">
      <Main>{children}</Main>
    </div>
  );
};

export default Page;
