import { MdHome, MdNoteAlt, MdSettings } from 'react-icons/md';

const Sidebar = () => {
  const iconClassName = "hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-100";
  return (
    <div className="h-screen w-16 bg-neutral-950  flex-col items-center py-4">
      <div className='w-full flex items-center justify-center p-2 bg-neutral-800 ease-in-out duration-300'>
        <MdHome size={32} className={iconClassName} />
      </div>
      <div className='w-full flex items-center justify-center p-2 hover:bg-neutral-900 ease-in-out duration-300'>
        <MdNoteAlt size={32} className={iconClassName} />
      </div>
      <div className='w-full flex items-center justify-center p-2 hover:bg-neutral-900 ease-in-out duration-300'>
        <MdSettings size={32} className={iconClassName} />
      </div>
    </div>
  );
};


export default Sidebar;