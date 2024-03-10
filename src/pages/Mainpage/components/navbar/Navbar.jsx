import { useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import "./navbar.css";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(true);
  };
  const handleStrech = () => {
    setExpand(false);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="header-options">
        <div className="header-option">
          <div className="header-icon" onClick={handleExpand}>
            <CiSearch />
          </div>
          <div className={"search-bar" + (expand ? " expand" : "")}>
            <div className="header-icon" onClick={handleStrech}>
              <GoArrowLeft />
            </div>
            <input type="text" />
            <div className="header-icon">
              <CiSearch />
            </div>
          </div>
        </div>
        <div className="header-option">
          <div className="header-icon">
            <CiBellOn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
