import { Head } from "../Head/Head";
import { EditorTextaria, EditorWrapper } from "./Editor.styled";

export const Editor = ({ handleChange, editorText, handleClick, isOpen }) => {
  return (
    <EditorWrapper isOpen={isOpen}>
      <Head title="Editor" handleClick={handleClick} isOpen={isOpen} />
      <EditorTextaria
        onChange={handleChange}
        name="editor"
        id="editor"
        cols="40"
        rows="12"
        value={editorText}
      ></EditorTextaria>
    </EditorWrapper>
  );
};
