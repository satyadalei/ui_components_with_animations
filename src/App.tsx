import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="">Hello</h1>
        <hr />
        {/* <div className="h-[80vh] border border-red-500 flex justify-center items-center">
          <div className="border h-[80%] w-5 relative overflow-hidden">
            <div className="w-[300px] h-[300px] rounded-full bg-radial from-sky-400/70 via-sky-400/20 to-transparent absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div> */}

        <div className="h-[80vh] flex justify-center items-center relative">
          {/* Thin Vertical Line */}
          <div className="w-px h-full relative">
            {/* Glowing Gradient Effect */}
            {/* <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-purple-500/70 via-indigo-400/30 to-transparent blur-3xl"></div> */}

            <div className="h-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent from-5% via-blue-500 via-50% to-transparent to-5%"></div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default App;
