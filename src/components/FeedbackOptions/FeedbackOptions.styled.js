import styled from 'styled-components';

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const FeedbackBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 600;
  height: 45px;
  cursor: pointer;
  color: inherit;
  background-color: orange;
  border: 1px solid inherit;
  border-radius: 5px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    border-color: orange;
    color: orange;
    background-color: black;
  }
`;