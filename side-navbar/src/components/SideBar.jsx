import React, { useState } from "react";
import "./sidebar.css";

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({ child }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      Path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      Path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      Path: "/Inventort",
      name: "inventort",
      icon: <FaRegChartBar />,
    },
    {
      Path: "/Supplier",
      name: "supplier",
      icon: <FaShoppingBag />,
    },
    {
      Path: "/Transport",
      name: "transport",
      icon: <FaThList />,
    },
    {
      Path: "/Contact",
      name: "contact",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{child}</main>
      </div>
  );
};

export default SideBar;
