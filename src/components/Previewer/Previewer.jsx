import marked from "marked";
import DOMPurify from "dompurify";
import { Head } from "../Head/Head";
import { PrevewerAria, PreviewerWrapper } from "./Previewer.styled";

export const Previewer = ({ editorText, handleClick, isOpen }) => {
  const htmlText = DOMPurify.sanitize(marked(editorText, { breaks: true }));

  return (
    <PreviewerWrapper isOpen={isOpen}>
      <Head title="Previewer" handleClick={handleClick} isOpen={isOpen} />
      <PrevewerAria
        id="preview"
        dangerouslySetInnerHTML={{ __html: htmlText }}
      ></PrevewerAria>
    </PreviewerWrapper>
  );
};
