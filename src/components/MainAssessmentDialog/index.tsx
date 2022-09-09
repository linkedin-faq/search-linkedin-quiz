import React from "react";
import { Content, Header, MainDialog, Title } from "./style";

type propType = {
  title: string;
  children: React.ReactNode;
};

const MainAssessmentDialog: React.FC<propType> = ({ title, children }) => {
  return (
    <MainDialog>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </MainDialog>
  );
};

export default MainAssessmentDialog;
