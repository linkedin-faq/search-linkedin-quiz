import styled from "styled-components";

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 5px;
`;

export const MenuItems = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background: transparent;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: #057642;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const MenuItemContentTypeActive = styled.button`
  background-color: #057642;
  color: #fff;
`;
