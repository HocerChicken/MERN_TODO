import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #f0031213;
  border: 1px solid #f0031213;
  border-radius: 15px;
  :focus {
    outline: none;
    border: 3px solid #f0031213;
  }
`;

export const Button = styled.button`
  padding: 8px 36px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-left: 4px;
  color: white;
  background: red;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid #f0031213;
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;
