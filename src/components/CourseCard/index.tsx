import React from "react";
import {
  CourseCardDescription,
  CourseCardImage,
  CourseImage,
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

const CourseCard: React.FC<propType> = ({ image, title, url, description }) => {
  return (
    <StyledCourseCard href={url}>
      <CourseImage>
        <CourseCardImage src={image} alt="" />
      </CourseImage>
      <CourseCardTextDescription>
        <CourseCardTitle>{title}</CourseCardTitle>
        <CourseCardDescription>Topics: {description}</CourseCardDescription>
      </CourseCardTextDescription>
    </StyledCourseCard>
  );
};

export default CourseCard;
