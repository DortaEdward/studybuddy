import CreateBoard from "../components/CreateBoard";

const Boards = () => {
  return (
    <div className="flex flex-col gap-4 w-full relative">
      <h1>Boards</h1>
      <div>
        <CreateBoard />
      </div>
      <div className="absolute top-[40%] left-[35%] flex flex-col items-center gap-1">
        <label>Board Name</label>
        <input type="text" />
        <button type="button">Create</button>
      </div>
    </div>)
}

export default Boards;