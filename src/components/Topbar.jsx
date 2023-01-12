import SearchIcon from "./Icons/SearchIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";

const Topbar = () => {
  return (
    <nav className="w-full h-[65px] shadow-[2px_2px_4px_0_rgba(0,0,0,0.3)] pt-[22px] pb-[23px] pl-[33px] flex justify-between">
      <div className="flex items-center gap-2.5">
        <SearchIcon />
        <form>
          <input
            type="text"
            className="p-2 focus:outline-none focus:border-0 focus:ring-0
            disabled:shadow-none"
            placeholder="Search anything here..."
          />
        </form>
      </div>
      <div className="hidden ml-16 mr-9 md:flex">
        <a href="#" className="flex items-center gap-2.5">
          <LogoutIcon />
          <span className="text-[#EE0D0D] font-bold">Logout</span>
        </a>
        <div className="ml-[25px] cursor-pointer">
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
