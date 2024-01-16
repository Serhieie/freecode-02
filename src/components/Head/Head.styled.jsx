import styled from "@emotion/styled";

export const HeadWrapper = styled.div`
  background-color: lightgreen;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border: 1px solid grey;
  border-bottom: none;
  padding: 0px 20px;

  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;

export const HeaderTitle = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  margin: 6px;
`;

export const HeaderButton = styled.button`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: transparent;
  border: transparent;

  transition: all 300ms ease-in-out;

  margin-left: auto;

  &:hover {
    color: orangered;
    transform: scale(1.1);
  }
`;
