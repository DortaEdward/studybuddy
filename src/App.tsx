import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import Sidebar from "./components/Sidebar.tsx";

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
    <div className="flex min-h-screen min-w-screen h-full w-full bg-neutral-700">
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
