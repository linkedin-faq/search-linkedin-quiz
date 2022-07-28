import React from "react";

type propType = {
  image: string | undefined;
  title: string;
  url: string;
  description: string;
};

const CourseCard: React.FC<propType> = ({ image, title, url, description }) => {
  return (
    <a className="course-card" href={url}>
      <div className="course-card__image-canvas">
        <img className="course-card__image" src={image} alt="" />
      </div>
      <div className="course-card__text-description">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">Description: {description}</p>
      </div>
    </a>
  );
};

export default CourseCard;
