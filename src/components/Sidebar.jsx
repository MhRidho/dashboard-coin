import React, { useState } from 'react';
import Control from '../assets/control.png';
import RadhikaImage from "../assets/RadhikaImage.png";
import DashboardIcon from "./Icons/DashboardIcon";
import ApprovalsIcon from "./Icons/ApprovalsIcon";
import MyClientsIcon from "./Icons/MyClientsIcon";
import EditProfilesIcon from "./Icons/EditProfilesIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import LogoDash from "./LogoDash";

const SidebarDisc = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='top-0 fixed h-full z-30'>
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-white relative duration-300 h-full`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <div className={`${!open && "hidden"} origin-left duration-200 w-full md:1/5 bg-[#1E67AF] pt-[22px] pb-[23px] pl-[23px]`}>
            <a href="#">
              <LogoDash />
            </a>
          </div>
        </div>
        <div className="mt-10 p-5 pt-3">
          <img src={RadhikaImage} width={67} height={67} />
          <p className={`${!open && "hidden"} origin-left duration-200 text-[#323A46] mt-3 font-bold`}>Radhika Dhawan Puri</p>
          <p className={`${!open && "hidden"} origin-left duration-200 text-[#323A46] text-sm font-normal`}>
            Senior Client Services
          </p>
        </div>
        <hr className={`${!open && "hidden"} origin-left duration-200 w-[210px] ml-[25px] mt-4`} />
        <div className='w-full pl-8 pt-[28px] pb-6'>
          <p className={`${!open && "hidden"} origin-left duration-200 text-[#323A46] font-normal text-[11px] tracking-wide`}>
            NAVIGATION
          </p>
          <ul className="mt-3">
            <li className="text-[#1E67AF] font-bold my-2.5">
              <a href="#" className="flex items-center gap-3">
                <DashboardIcon /><span className={`${!open && "hidden"} origin-left duration-200`}>Dashboard</span>
              </a>
            </li>
            <li className="text-[#323A46] font-bold my-2.5">
              <a href="#" className="flex items-center gap-3">
                <ApprovalsIcon /><span className={`${!open && "hidden"} origin-left duration-200`}>Approvals</span>
              </a>
            </li>
          </ul>
        </div>
        <hr className={`${!open && "hidden"} origin-left duration-200 w-[210px] ml-[25px]`} />
        <div className='w-full pl-8 pt-[28px]'>
          <p className={`${!open && "hidden"} origin-left duration-200 text-[#323A46] font-normal text-[11px] tracking-wide`}>
            MY ACCOUNT
          </p>
          <ul className="mt-3">
            <li className='text-[#323A46] font-bold my-2.5'>
              <a href="#" className="flex items-center gap-3">
                <MyClientsIcon /> <span className={`${!open && "hidden"} origin-left duration-200`}>My Clients</span>
              </a>
            </li>
            <li className="text-[#323A46] font-bold my-2.5">
              <a href="#" className="flex items-center gap-3">
                <EditProfilesIcon /> <span className={`${!open && "hidden"} origin-left duration-200`}>Edit Profiles</span>
              </a>
            </li>
          </ul>
        </div>

        <hr className={`${!open && "hidden"} origin-left duration-200 w-[210px] ml-[25px]`} />
        <div className='w-full pl-8 pt-[28px]'>
          <ul className="mt-3">
            <li className='text-[#323A46] font-bold my-2.5'>
              <a href="#" className="flex items-center gap-3">
                <LogoutIcon /> <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarDisc;
