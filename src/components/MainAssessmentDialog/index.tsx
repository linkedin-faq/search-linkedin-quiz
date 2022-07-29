import React from "react";
import { Content, Header, StyledMainDialog, Title } from "./style";

type propType = {
  title: string;
  children: React.ReactNode;
};

const MainAssessmentDialog: React.FC<propType> = ({ title, children }) => {
  return (
    <StyledMainDialog>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </StyledMainDialog>
  );
};

export default MainAssessmentDialog;
