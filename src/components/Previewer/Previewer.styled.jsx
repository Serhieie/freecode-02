import styled from "@emotion/styled";

export const PreviewerWrapper = styled.div`
  width: ${(props) => (props.isOpen ? "75%" : "58%")};
  height: ${(props) => (props.isOpen ? "100%" : "40%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  padding: 0px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgb(54, 103, 54);

  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;

export const PrevewerAria = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 0px;
  padding: 0px 20px 60px;
  background-color: rgb(222, 250, 222);

  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;
