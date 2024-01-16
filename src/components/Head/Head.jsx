import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { HeadWrapper, HeaderTitle, HeaderButton } from "./Head.styled";

export const Head = ({ title, isOpen, handleClick }) => {
  return (
    <HeadWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButton onClick={handleClick} type="button">
        {isOpen ? (
          <AiOutlineFullscreenExit style={{ marginLeft: "auto" }} />
        ) : (
          <AiOutlineFullscreen style={{ marginLeft: "auto" }} />
        )}
      </HeaderButton>
    </HeadWrapper>
  );
};
