import styled from "styled-components";

export const NumberInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const NumberInputButton = styled.button`
  width: 1.25rem; 
  height: 1.25rem;
  border: none;
  background-color: lightgray;
  border-radius: 0.2rem;
`;

export const NumberInputLabel = styled.label`
  display: block;
  margin-right: auto;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const NumberInputValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;