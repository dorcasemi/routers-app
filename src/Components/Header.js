import React from "react";
import "./Style.css";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link } from "react-router-dom";
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>

      <div className="navs">
        <span className="txt">
          <HomeIcon /> <Link to="/"> Home</Link>
        </span>
        <span className="txt">
          <AddBusinessIcon /> <Link to="/about">About</Link>
        </span>
        <span className="txt">
          <ContactsIcon /> <Link to="/contact">Contact</Link>
        </span>
      </div>
      {/* <div className="burger"> <MenuOpenIcon /> </div> */}
    </div>
  );
};

export default Header;
