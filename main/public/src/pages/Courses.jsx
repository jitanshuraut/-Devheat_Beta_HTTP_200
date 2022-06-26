import React from 'react'
import style from "../style/course.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Courses() {
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter.log);
  
    return (
        <>
            {count == "" ? navigate("/") : console.log("yes")}
            <h1 className={style.head}>
                Courses
            </h1>
            <div style={{ "display": "flex", "flex-wrap": "wrap" }}>

                <div className={style.card6}>
                    <img src="science.jpg" className={style.documentIcon50} alt="Card img" />
                    <div className={style.subName5}>Science</div>

                </div>
                <div className={style.card6}>
                    <img src="coding.jpg" className={style.documentIcon50} alt="Card img" />
                    <div className={style.subName5}>Coding</div>

                </div>
                <div className={style.card6}>
                    <img src="chemistry.png" className={style.documentIcon50} alt="Card img" />
                    <div className={style.subName5}>Chemistry</div>

                </div>
                <div className={style.card6}>
                    <img src="Math.png" className={style.documentIcon50} alt="Card img" />
                    <div className={style.subName5}>Engineering Mechanics</div>

                </div>
            </div>

        </>
    )
}

export default Courses