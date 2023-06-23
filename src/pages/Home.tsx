function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-gray-100 flex flex-col items-center justify-between py-10">
      <div>
        <h1 className="text-2xl">Welcome Back!</h1>
      </div>
      <div>
        <div className="flex gap-2">
          <p>Pie Chart</p>
          <p>Bar Chart</p>
          <p>Line Chart</p>
        </div>
        <div className="w-56 h-56 rounded-full bg-green-500 my-4"></div>
      </div>
      <div>
        <p>Inpirational Quotes</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-bold">Quick Start</p>
        <div className="flex gap-2 items-center">
          <p>Create New Board</p>
          <p>Return to last board</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
