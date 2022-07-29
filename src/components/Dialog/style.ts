import styled from "styled-components";

export const DialogMain = styled.div`
  padding: 12px;
  background-color: darkgray;
`;

export const DialogWindow = styled.div`
  border-radius: 5px;
  background: #fff;

  @media (min-width: 1024px) {
    max-width: 750px;
    margin: 0 auto;
  }
`;

export const DialogHeader = styled.header`
  padding: 12px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const DialogTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const DialogContent = styled.div`
  padding: 12px 24px;
`;
