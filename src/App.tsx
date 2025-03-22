import "./App.css";
import Introduction from "./components/Introduction";

function App() {
  return (
    <>
      <div>
        <hr />
        <div className="h-[80vh] flex justify-center items-center relative">
          {/* Thin Vertical Line */}
          <div className="w-px h-full relative">
            <div className="h-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent">
            </div>
          </div>
        </div>

        {/* <div className="h-10 bg-gradient-to-r from-blue-500 from-10% via-green-500 via-30% to-yellow-500 to-90%" ></div>
        <div className="h-10 bg-gradient-to-r from-transparent via-blue-500 via-80% to-transparent" ></div> */}

        <hr />
      </div>
      <Introduction />
    </>
  );
}

export default App;
