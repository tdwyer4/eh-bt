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
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function PreSoldPage() {
  return (
    <StoreProvider>
      <div>
        <Toaster />
        <Manifest />
        <AboutMe />
        {/*<Projects />
        <Skills />
        <Resume />
        <Contact /> */}
      </div>
    </StoreProvider>
  );
}

export default PreSoldPage;
