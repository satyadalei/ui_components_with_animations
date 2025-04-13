import "./App.css";
import CircularOrbits from "./components/CircularOrbits";
import DocumentEditorComponent from "./components/DocumentEditorComponent";
import DotPatterns, { DashedPattern } from "./components/DotPatterns";
import Faq from "./components/Faq";
import Introduction from "./components/Introduction";
import LogoTicker from "./components/LogoTicker";
import Navbar from "./components/Navbar";
// import TanstackTable from "./components/TanstackTable";
// import TShirt from "./components/TShirt";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
