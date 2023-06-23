import { useLocation, Link } from 'react-router-dom';
import { MdHome, MdNoteAlt, MdSettings, MdCoPresent } from 'react-icons/md';

const Sidebar = () => {
  const { pathname } = useLocation();
  const iconClassName = "hover:scale-110 transition ease-in-out duration-300 text-gray-100";
  return (
    <div className="h-screen w-16 bg-neutral-950 flex flex-col justify-between items-center py-4">
      <div>
        <Link to={'/'} className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/" ? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300 cursor-pointer`}>
          <MdHome size={32} className={iconClassName} />
          <p className='text-gray-100 text-sm font-thin'>Home</p>
        </Link>
        <Link to={'/boards'} className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/boards" ? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300 cursor-pointer`}>
          <MdNoteAlt size={32} className={iconClassName} />
          <p className='text-gray-100 text-sm font-thin'>Boards</p>
        </Link>
        <Link to={'/practice'} className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/practice" ? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300 cursor-pointer`}>
          <MdCoPresent size={32} className={iconClassName} />
          <p className='text-gray-100 text-sm font-thin'>Practice</p>
        </Link>
      </ div>
      <Link to={'/settings'} className={`w-full flex flex-col items-center justify-center p-2 ${pathname === "/settings" ? 'bg-neutral-800' : 'hover:bg-neutral-700'} ease-in-out duration-300 cursor-pointer`}>
        <MdSettings size={32} className={iconClassName} />
        <p className='text-gray-100 text-sm font-thin'>Settings</p>
      </Link>
    </div>
  );
};


export default Sidebar;