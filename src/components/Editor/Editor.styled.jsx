import styled from "@emotion/styled";

export const EditorWrapper = styled.div`
  width: ${(props) => (props.isOpen ? "80%" : "30%")};
  height: ${(props) => (props.isOpen ? "94vh" : "40%")};
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

export const EditorTextaria = styled.textarea`
  margin: 0;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 0px;
  padding: 0px 20px;
  padding-top: 20px;
  resize: none;
  outline: none;

  background-color: rgb(222, 250, 222);

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;
