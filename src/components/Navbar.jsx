import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from "../style/Navbar.module.css"


function Navbar() {
    const [show, setShow] = useState(null);
    const [profile, setProfile] = useState(false);
    return (
        <>
 
          <nav className={style.nav}>
            <img src="llog.png" alt="Logo image" className={style.A_logo}/>
            <ul className={style.A_nav_name}>
              
                <li className={style.A_nav}><Link to="/dashboard" className={style.ext}  style={{"backgroundColor":"transparent"}}>Dashboard</Link></li>
                <li className={style.A_nav}><Link to="/analytics"className={style.ext} style={{"backgroundColor":"transparent"}}>Analytics</Link></li>
                <li className={style.A_nav}><Link to="/test"className={style.ext} style={{"backgroundColor":"transparent"}}>Exam</Link></li>
              
               
              
                
            </ul>
            <img src="svg/Menu icon.png" alt="Menu icon" className={style.A_menu_icon}/>
          
        </nav>
        
        </>
    )
}

export default Navbar


// <div>
//           <nav className={style.nav}>
//             <img src="svg/Logo.svg" alt="Logo image" className={style.A_logo}/>
//             <ul className={style.A_nav_name}>
              
//                 <li className={style.A_nav}><Link to="/">Analytics</Link></li>
//                 <li className={style.A_nav}><Link to="/analytics">Dashboard</Link></li>
//                 <li className={style.A_nav}><Link to="/test">Test</Link></li>
                
               
//             </ul>
//             <img src="svg/Menu icon.png" alt="Menu icon" className={style.A_menu_icon}/>
          
//         </nav>
//         </div>