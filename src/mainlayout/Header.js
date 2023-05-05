import React from "react";
import "./../assets/style/Header.css";
import ProBookWaterMark from "./../assets/images/ProBookWaterMark.png";

function Header() {
  return (
    <div className="LayoutHeader">
      <form>
        <input
          type="submit"
          value="Update Profile from LinkedIn"
          className="btn text-dark text-center UpdateProfile"
        />
      </form>
      <img src={ProBookWaterMark} alt="ProBook WaterMark" />
    </div>
  );
}

export default Header;
