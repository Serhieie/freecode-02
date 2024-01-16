import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  padding: 0px 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;
