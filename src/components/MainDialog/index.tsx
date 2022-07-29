import React from "react";
import { Content, Header, StyledPage, Title, StyledMainDialog } from "./style";

type propType = {
  title: string;
  children: React.ReactNode;
};

const MainDialog: React.FC<propType> = ({ title, children }) => {
  return (
    <StyledPage>
      <StyledMainDialog>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>{children}</Content>
      </StyledMainDialog>
    </StyledPage>
  );
};

export default MainDialog;
