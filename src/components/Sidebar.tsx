import { useLocation } from 'react-router-dom';
import { MdHome, MdNoteAlt, MdSettings } from 'react-icons/md';

const Sidebar = () => {
  const {pathname} = useLocation();
  const iconClassName = "hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-100";
  return (
    <div className="h-screen w-16 bg-neutral-950  flex-col items-center py-4">
      <div className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/"? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300`}>
        <MdHome size={32} className={iconClassName} />
        <p className='text-gray-100 text-sm font-thin'>Home</p>
      </div>
      <div className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/notes"? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300`}>
        <MdNoteAlt size={32} className={iconClassName} />
        <p className='text-gray-100 text-sm font-thin'>Notes</p>
      </div>
      <div className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/setting"? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300`}>
        <MdSettings size={32} className={iconClassName} />
        <p className='text-gray-100 text-sm font-thin'>Settings</p>
      </div>
    </div>
  );
};


export default Sidebar;