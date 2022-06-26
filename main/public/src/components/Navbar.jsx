import React, { useState, useEffect } from 'react';
import {
  FaTh,
  FaBars,
  FaRegChartBar,
  FaBrain
} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
// import { NAV } from "../actions/index"
// import { useSelector, useDispatch } from "react-redux"
import qs from "qs";
import { createBrowserHistory } from "history";
import style from "../style/Navbar.module.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const myst = useSelector((state) => state.change_nav)
  const [count, setCount] = useState(true);
  const history = createBrowserHistory();

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.count) {
      setCount(Number(filtersFromParams.count));
    }
  }, []);

  // useEffect(() => {
  //   history.push(`?count=${count}`);
  // }, [count]);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/course",
      name: "Course",
      icon: <FaBrain />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    }

  ]
  return (
    <>
   
      {/* <div style={{ wclassNamet{style.: isOpen ? "200px" : "50px" }} className={style.meN{style.me="sclassNamee{style.ar">
        <div className={style.meN{style.me="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className={style.meN{style.me="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className={style.meN{style.me="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => {
              return (
                <NavLink to={item.path} key={index} className={style.meN{style.me="link" activeclassNameN{style.me="active">
                  <div className={style.meN{style.me="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className={style.meN{style.me="link_text">{item.name}</div>
                </NavLink>
              )
          })
        }
      </div>
      <main>{children}</main> */}
      <div>
          <nav className={style.nav}>
            <img src="llog.png" alt="Logo image" className={style.A_logo}/>
            <ul className={style.A_nav_name}>
              
                <li className={style.A_nav}><Link to="/dashboard" className={style.ext}  style={{"backgroundColor":"transparent"}}>Dashboard</Link></li>
                <li className={style.A_nav}><Link to="/analytics"className={style.ext} style={{"backgroundColor":"transparent"}}>Analytics</Link></li>
                <li className={style.A_nav}><Link to="/exam"className={style.ext} style={{"backgroundColor":"transparent"}}>Exam</Link></li>
                <li className={style.A_nav}><Link to="/course" className={style.ext} style={{"backgroundColor":"transparent"}}>Course</Link></li>
               
              
                
            </ul>
            <img src="svg/Menu icon.png" alt="Menu icon" className={style.A_menu_icon}/>
          
        </nav>
        </div>
        {/* <div className={style.nav_rep}>
    
    
    <ul classNmae={style.j_nav_name}>
        <li className={style.j_nav}>Home</li>
        <li className={style.j_nav}> <a  className={style.j_nav} href="#J_pp2_head"> Docs</a></li>
        <li className={style.j_nav}> <a  className={style.j_nav}href="#J_roadmap_head"> Roadmap</a></li>
        <li className={style.j_nav}> <a  className={style.j_nav}href="#J_Advisors "> Team</a></li>
        <li className={style.j_nav}> <a  className={style.j_nav}href="#J_faq"> FAQ</a></li>
        <li className={style.j_nav}>  <a className={style.j_nav} href="#sec5"> Apply for IDO</a></li>
      
    </ul>
</div> */}
   
    </>
  );
};

export default Navbar;