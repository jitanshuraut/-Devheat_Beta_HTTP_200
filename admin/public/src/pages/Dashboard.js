import React from 'react'
import style from "../style/profile.module.css"
function Dashboard() {
  return (
    <>
     <div className={style.profile}>

<div className={style.cont1}>
  <div className={style.box1}>
    <img src="profile.jfif" alt="Profile Pic" className={style.photo} />
    <div className={style.name}>Ankit Gondha</div>
    <div className={style.text1}>B.Tech CSE 1st Year</div>

  </div>

  <div className={style.box2}>
    <div className={style.name}>Personal Information</div>
    <hr />

    <div className={style.a1}>
      <div className={style.form2}>
        <div className={style.text1}>First Name</div>
        <input type="text" className={style.textbox} id={style.textbox} placeholder="Ankit"/>
      </div>
      <div className={style.form2}>
        <div className={style.text1}>Last Name</div>
        <input type="text" className={style.textbox} id={style.textbox} placeholder="Gondha"/>
      </div>
    </div>

    <div className={style.a1}>
      <div className={style.form2}>
        <div className={style.text1}>Mobile No.</div>
        <input type="text" className={style.textbox} id={style.textbox} placeholder="9876543210"/>
      </div>
      <div className={style.form2}>
        <div className={style.text1}>Email ID</div>
        <input type="text" className={style.textbox} id={style.textbox} placeholder="ui21cs10@iiitsurat.ac.in"/>
      </div>
    </div>
    

  </div>
</div>
</div>
</>
  )
}

export default Dashboard