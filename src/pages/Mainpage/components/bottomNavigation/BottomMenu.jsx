import { NavLink, useLocation } from "react-router-dom";

const BottomMenu = (Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === Props.to;
  return (
    <NavLink to={Props.to} className="bottom-menu">
      <div className="bottom-icon">
        {isActive ? Props.activeIcon : Props.inactiveIcon}
      </div>
      <span>{Props.text}</span>
    </NavLink>
  );
};

export default BottomMenu;
