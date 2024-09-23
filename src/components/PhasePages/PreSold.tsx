import React, {
  useReducer,
  createContext,
  useEffect,
  useContext,
  useRef,
} from "react";
import reducer from "../../reducers/reducer";
import sampleStore from "../../utils/samples/sampleStore";
import setCursorLocation from "../../utils/helpers/setCursorLocation";
import setCursorAppearance from "../../utils/helpers/setCursorAppearance";
import toggleContextMenu from "../../utils/helpers/toggleContextMenu";
import hideContextMenu from "../../utils/helpers/hideContextMenu";
import { Toaster } from "react-hot-toast";
import Cursor from "../Cursor/Cursor";
import Manifest from "../Manifest/Manifest";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import Hero from "../Hero/Hero";

function PreSoldPage() {
  return (
    <div>
      <Toaster />
      <Manifest />
      <AboutMe />
      {/*<Projects />
        <Skills />
        <Resume /> */}
    </div>
  );
}

export default PreSoldPage;
