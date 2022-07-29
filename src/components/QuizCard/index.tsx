import React from "react";
import {
  Description,
  Icon,
  QuizIcon,
  QuizTextCard,
  Title,
  StyledQuizCard,
} from "./style";

type propType = {
  image: string | undefined;
  title: string;
  url: string;
  description: string;
};

const QuizCard: React.FC<propType> = ({ image, title, url, description }) => {
  return (
    <StyledQuizCard href={url}>
      <QuizIcon>
        <Icon src={image} alt="Quiz square icon" />
      </QuizIcon>
      <QuizTextCard>
        <Title>{title}</Title>
        <Description>Topics: {description}</Description>
      </QuizTextCard>
    </StyledQuizCard>
  );
};

export default QuizCard;
