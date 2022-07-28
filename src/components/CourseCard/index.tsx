import React from "react";
import {
  CourseCardDescription,
  CourseCardImage,
  CourseCardImageCanvas,
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
      <CourseCardImageCanvas>
        <CourseCardImage src={image} alt="" />
      </CourseCardImageCanvas>
      <CourseCardTextDescription>
        <CourseCardTitle>{title}</CourseCardTitle>
        <CourseCardDescription>
          Description: {description}
        </CourseCardDescription>
      </CourseCardTextDescription>
    </StyledCourseCard>
  );
};

export default CourseCard;
