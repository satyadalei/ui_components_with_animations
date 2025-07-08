import "./App.css";
import CircularOrbits from "./components/CircularOrbits";
import DocumentEditorComponent from "./components/DocumentEditorComponent";
import { TextIgniter } from "@mindfiredigital/react-text-igniter";
import DotPatterns, { DashedPattern } from "./components/DotPatterns";
import Faq from "./components/Faq";
import Introduction from "./components/Introduction";
import LogoTicker from "./components/LogoTicker";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import Pentagon from "./components/Pentagon";
import { Routes, Route } from "react-router"

import { useRef } from "react";

// import TanstackTable from "./components/TanstackTable";
// import TShirt from "./components/TShirt";
function App() {
  const editorRef = useRef();

  // define features
  const features = [
    "heading",
    "bold",
    "italic",
    "underline",
    "orderedList",
    "unorderedList",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "createLink",
    "insertImage",
    "superscript",
    "subscript",
    "table",
    "layout",
  ];


  return (
    <Routes>

      <Route path="/" element={<>
        <div>
          {/* <TanstackTable /> */}
          <Navbar />
          {/* <div>
        <div className="h-[80vh] flex justify-center items-center relative">
          <div className="w-px h-full relative">
            <div className="h-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent">
            </div>
          </div>
        </div>
      </div> */}
          <Introduction />
          <Faq />
          <LogoTicker />
          {/* <DocumentEditorComponent /> */}
          {/* <TShirt /> */}
          <CircularOrbits />
          <DotPatterns />
          <DashedPattern />
          <SkillsSection />
          {/* <TextIgniter ref={editorRef} features={features} height={"400px"} />; */}
          <Pentagon />
        </div>
      </>} >

      </Route>
    </Routes>
  );
}

export default App;
