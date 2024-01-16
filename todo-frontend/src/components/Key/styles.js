import styled from "styled-components";

export const KeyContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px 0;
  }
`;

export const BulletPoint = styled.li`
  &.last {
    color: red;
  }
`;
