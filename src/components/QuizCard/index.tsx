import React from "react";
import {
  CourseCardDescription,
  CourseCardImage,
  CourseIcon,
  CourseCardTextDescription,
  CourseCardTitle,
  StyledCourseCard,
} from "./style";

type propType = {
  image: string | undefined;
  title: string;
  url: string;
  description: string;
};

const QuizCard: React.FC<propType> = ({ image, title, url, description }) => {
  return (
    <StyledCourseCard href={url} data-test="Evgeny">
      <CourseIcon>
        <CourseCardImage src={image} alt="" />
      </CourseIcon>
      <CourseCardTextDescription>
        <CourseCardTitle>{title}</CourseCardTitle>
        <CourseCardDescription>Topics: {description}</CourseCardDescription>
      </CourseCardTextDescription>
    </StyledCourseCard>
  );
};

export default QuizCard;
