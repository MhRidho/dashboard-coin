import Logo from "./Logo";
import DashboardIcon from "./Icons/DashboardIcon";
import ApprovalsIcon from "./Icons/ApprovalsIcon";
import MyClientsIcon from "./Icons/MyClientsIcon";
import EditProfilesIcon from "./Icons/EditProfilesIcon";
import RadhikaImage from "../assets/RadhikaImage.png";

export default function Sidebar() {
  return (
    <aside className="w-1/5 shadow-[2px_2px_4px_0_rgba(0,0,0,0.05)]">
      <div className="w-full bg-[#1E67AF] pt-[22px] pb-[23px] pl-[23px]">
        <a href="#">
          <Logo />
        </a>
      </div>
      <div className="w-full pl-[25px] pt-[59px] pb-[29px]">
        <img src={RadhikaImage} width={67} height={67} />
        <p className="text-[#323A46] mt-3 font-bold">Radhika Dhawan Puri</p>
        <p className="text-[#323A46] text-sm font-normal">
          Senior Client Services
        </p>
      </div>
      <hr className="w-[210px] ml-[25px]" />
      <div className="w-full pl-[25px] pt-[28px] pb-[44px]">
        <p className="text-[#323A46] font-normal text-[11px] tracking-wide">
          NAVIGATION
        </p>
        <ul className="mt-3">
          <li className="text-[#1E67AF] font-bold my-2.5">
            <a href="#" className="flex items-center gap-3">
              <DashboardIcon /> Dashboard
            </a>
          </li>
          <li className="text-[#323A46] font-bold my-2.5">
            <a href="#" className="flex items-center gap-3">
              <ApprovalsIcon /> Approvals
            </a>
          </li>
        </ul>
      </div>
      <hr className="w-[210px] ml-[25px]" />
      <div className="w-full pl-[25px] pt-[28px]">
        <p className="text-[#323A46] font-normal text-[11px] tracking-wide">
          MY ACCOUNT
        </p>
        <ul className="mt-3">
          <li className="text-[#323A46] font-bold my-2.5">
            <a href="#" className="flex items-center gap-3">
              <MyClientsIcon /> My Clients
            </a>
          </li>
          <li className="text-[#323A46] font-bold my-2.5">
            <a href="#" className="flex items-center gap-3">
              <EditProfilesIcon /> Edit Profiles
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
