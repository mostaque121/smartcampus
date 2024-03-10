import { GoHome, GoHomeFill } from "react-icons/go";
import { HiMiniUsers, HiOutlineUsers } from "react-icons/hi2";
import { RiMessage3Fill, RiMessage3Line } from "react-icons/ri";
import { TbUser, TbUserFilled } from "react-icons/tb";
import BottomMenu from "./BottomMenu";
import "./bottomnavigation.css";

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation-container">
      <div className="bottom-navigation">
        <BottomMenu
          to="/home"
          inactiveIcon={<GoHome />}
          activeIcon={<GoHomeFill />}
          text="Home"
        />
        <BottomMenu
          to="/users"
          inactiveIcon={<HiOutlineUsers />}
          activeIcon={<HiMiniUsers />}
          text="Users"
        />
        <BottomMenu
          to="/message"
          inactiveIcon={<RiMessage3Line />}
          activeIcon={<RiMessage3Fill />}
          text="Message"
        />
        <BottomMenu
          to="/profile"
          inactiveIcon={<TbUser />}
          activeIcon={<TbUserFilled />}
          text="Profile"
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
