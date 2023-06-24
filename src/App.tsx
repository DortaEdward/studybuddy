import Sidebar from "./components/Sidebar.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Boards from "./pages/Boards.tsx";
import Practice from "./pages/Practice.tsx";
import Settings from "./pages/Settings.tsx";

/*
  in order to use functions from the back-end
  window.ApiKey.functionName()
*/
function CreateCard() {
  <>
    <div className="w-[480px] h-[360px] bg-neutral-800 rounded text-gray-200 flex flex-col items-center justify-between py-4">
      <div className="flex flex-col items-center gap-1 justify-center h-[150px]">
        <div id="heading" className="text-lg">
          Subject
        </div>
        <div id="question" className="text-2xl">
          Is this a question?
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          className="w-[360px] h-[90px] p-2 resize-none rounded outline-none"
          placeholder="Enter Answer"
        />
        <button className="rounded py-2 bg-blue-500">Submit</button>
      </div>
    </div>
  </>;
}

function App() {
  return (
    <div className="flex h-full w-full bg-neutral-700">
      <Router>
        <Sidebar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Boards />} path="/boards" />
          <Route element={<Practice />} path="/practice" />
          <Route element={<Settings />} path="/settings" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
