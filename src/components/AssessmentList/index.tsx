import React from "react";
import {
  AssessmentDialog,
  Description,
  AssessmentListInput,
  AssessmentListItems,
  AssessmentMenuOptions,
  MainSvgIcon,
} from "./style";
import SvgIcon from "../../assets/assessment-icon.svg";

type propType = {
  description: string;
  children: React.ReactNode;
  menuOptions: React.ReactNode;
  searchValue: string;
  onSearchInputChange(event: React.FormEvent<HTMLInputElement>): void;
};

const AssessmentList: React.FC<propType> = ({
  children,
  description,
  searchValue,
  onSearchInputChange,
  menuOptions,
}) => {
  return (
    <>
      <AssessmentDialog>
        <Description>{description}</Description>
        <MainSvgIcon src={SvgIcon} alt="Skill assessment description icon" />
        <AssessmentListInput
          onChange={onSearchInputChange}
          value={searchValue}
          type="text"
          placeholder="Search assessment"
        />
      </AssessmentDialog>
      <AssessmentMenuOptions>{menuOptions}</AssessmentMenuOptions>
      <AssessmentListItems>{children}</AssessmentListItems>
    </>
  );
};

export default AssessmentList;
