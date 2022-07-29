import styled from "styled-components";

export const StyledCourseCard = styled.a`
  display: flex;
  padding: 12px 0;
  text-decoration: none;
  color: inherit;
`;

export const CourseIcon = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const CourseCardImage = styled.img`
  width: 100%;
`;

export const CourseCardTextDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    text-decoration: underline black;
  }
`;

export const CourseCardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

export const CourseCardDescription = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
`;
