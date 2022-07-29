import React from "react";
import {
  DetailsAssessmentHeader,
  Description,
  SearchQuizInput,
  AssessmentResultsListItems,
  SortingOptionsButtons,
  MainSvgIcon,
} from "./style";
import SvgIcon from "../../assets/assessment-icon.svg";

type propType = {
  description: string;
  children: React.ReactNode;
  sortingOptions: React.ReactNode;
  searchValue: string;
  onSearchInputChange(event: React.FormEvent<HTMLInputElement>): void;
};

const AssessmentList: React.FC<propType> = ({
  children,
  description,
  searchValue,
  onSearchInputChange,
  sortingOptions,
}) => {
  return (
    <>
      <DetailsAssessmentHeader>
        <Description>{description}</Description>
        <MainSvgIcon src={SvgIcon} alt="Skill assessment description icon" />
        <SearchQuizInput
          onChange={onSearchInputChange}
          value={searchValue}
          type="text"
          placeholder="Search assessment"
        />
      </DetailsAssessmentHeader>
      <SortingOptionsButtons>{sortingOptions}</SortingOptionsButtons>
      <AssessmentResultsListItems>{children}</AssessmentResultsListItems>
    </>
  );
};

export default AssessmentList;
