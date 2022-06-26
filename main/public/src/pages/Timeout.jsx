import React from 'react'
import {useNavigate} from 'react-router-dom';
import style from "../style/timeout.module.css"
function Timeout() {
  const navigate = useNavigate();
  const dashboard=()=>{
    navigate('/')
  }
  return (
    <>
    <div className={style.card}>
        <img src="clock.jfif" className={style.documentIcon} alt="document icon" />
        <div className={style.subName}>TIME OUT!</div>
        <button type="submit" onClick={dashboard} className={style.btn}>Ok</button>
      </div>
    </>
  )
}

export default Timeout