import React, { useState, useEffect, useContext, createContext } from 'react';
import style from "./../style/sigup.module.css"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { db } from "../firebase-con_ext"
import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import {
    increment,
} from '../redux/counterslice';



const Sigin = () => {

    const count = useSelector((state) => state.counter.log);
    const dispatch = useDispatch();
    const [sigin, setsigin] = useState("false")
    const navigate = useNavigate();
    const [us_id, setus_id] = useState("")
    const [pass, setpass] = useState("")
    const [cou, setcou] = useState(0)
    const [code, setcode] = useState([])

    const q = query(collection(db, "sigin"), where("type", "==", "teacher"))

    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(q);
            setcode(data.docs.map((doc) =>
                ({ ...doc.data(), id: doc.id })
            ))
        }
        getuser()
    }, [])
    function temp(val) {
        dispatch(increment(val))
    }




    const sub = () => {

        code.map((ele) => {

          


            if ((ele.reg == us_id) && (ele.password == pass)) {
                console.log("yes")
                setsigin("true")
                console.log(sigin)

                temp(sigin)
                if (count == "true") {
                    dispatch(increment(us_id))
                    navigate("/dashboard")
                }

            }



        })
    }

   


    return (
        <>

            <div className={style.container}>
                <img src="mobile login.svg" className={style.loginpic} alt="Login" />
                <div className={style.login}>
                    <div className={style.top}>Login to your account</div>
                    <div className={style.id}>
                        {/* <label for="exampleFormControlInput1" class="form-label">User ID</label> <br /> */}
                        <input type="email" className={style.userid} id="exampleFormControlInput1" onChange={(e) => {
                            setus_id(e.target.value)


                        }} placeholder="Enter your user ID" />
                    </div>
                    <div className={style.id}>
                        {/* <label for="exampleFormControlInput1" class="form-label">Password</label> <br /> */}
                        <input type="password" class={style.userid} id="exampleFormControlInput1" onChange={(e) => {
                            setpass(e.target.value)

                        }} placeholder="Enter your password" />
                    </div>
                    <button type="submit" onClick={() => {
                        sub()
                        setcou(cou + 1)
                    }} className={style.btn} >Login</button>


                </div>


            </div>

        </>
    );
};

export default Sigin;
