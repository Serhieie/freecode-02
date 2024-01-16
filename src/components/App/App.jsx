import { aboutMe, freeCodeText } from "../../constants/about-me";
import { useState } from "react";
import { Editor } from "../Editor/Editor";
import { Previewer } from "../Previewer/Previewer";
import { Wrapper } from "./App.styled";

function App() {
  const [editorText, setEditorText] = useState(aboutMe);
  const [isOpenEditor, setIsOpenEditor] = useState(false);
  const [isOpenPreviewer, setIsOpenPreviewer] = useState(false);

  const handleChange = (e) => {
    setEditorText(e.target.value);
  };

  const handleClickEditor = () => {
    setIsOpenEditor((prevIsOpen) => !prevIsOpen);
  };

  const handleClickPreviewer = () => {
    setIsOpenPreviewer((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Wrapper>
      {isOpenPreviewer ? null : (
        <Editor
          handleChange={handleChange}
          editorText={editorText}
          handleClick={handleClickEditor}
          isOpen={isOpenEditor}
        />
      )}
      {isOpenEditor ? null : (
        <Previewer
          editorText={editorText}
          handleClick={handleClickPreviewer}
          isOpen={isOpenPreviewer}
        />
      )}
    </Wrapper>
  );
}

export default App;
