import { MdNoteAdd } from 'react-icons/md';

const CreateBoard = () => {
  return (<div className='text-gray-100 w-40 h-32 rounded outline relative ml-2 flex items-center justify-center'>
    <p className='absolute -top-4 left-6 bg-neutral-700 px-2'>Create Board</p>
    <MdNoteAdd size={80} />
  </div>)
}

export default CreateBoard;