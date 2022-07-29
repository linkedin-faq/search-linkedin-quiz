import styled from "styled-components";

export const MainSvgIcon = styled.img`
  order: -1;
  margin-bottom: 16px;
  grid-area: icon;

  @media (min-width: 768px) {
    order: initial;
    margin-bottom: 0;
    margin-left: auto;
  }
`;

export const DetailsAssessmentHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "disclaimer icon"
      "input icon";
    gap: 8px;
  }
`;

export const Description = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 20px;
  grid-area: disclaimer;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
  }
`;

export const SortingOptionsButtons = styled.div`
  padding-top: 12px;
`;

export const AssessmentResultsListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SearchQuizInput = styled.input`
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  grid-area: input;
  height: 20px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;
