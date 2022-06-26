import React, { useState, useEffect } from 'react';
import style from "./../style/test.module.css"
import { db } from "../firebase-con_ext"
import { collection, query, where, getDocs } from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    incrementByAmount

} from '../redux/testslice';



const Exam = () => {

   
    const coun = useSelector((state)=>state.counter.log);

    const [code, setcode] = useState([])
    const [test_, settest_] = useState("")
    const [log, setlog] = useState("false")
    const navigate = useNavigate();
    const [prev, setprev] = useState("")
    const count = useSelector((state) => state.tester.test);
    console.log(count + "hiiiiiiiii" + "pppp")
    const dispatch = useDispatch();


    //---------------------------------------->>>>data_from_firebase
    //------------------------------------------>>>>>>>>
    const q = query(collection(db, "name"), where("show", "==", "true"))
    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(q);
            setcode(data.docs.map((doc) =>
                ({ ...doc.data(), id: doc.id })
            ))
        }
        getuser()
    }, [])

    return (
        <>
        {coun==""?navigate("/"):console.log("yes")}
            <h1 className={style.head}>
                Exam
            </h1>
            
     

            <div className={style.test_final}>

                {code.map((cod) => {
                    return (
                        <div className={style.test_box}  style={{"background-image" : "url(bg_card.png)"}}>
                            {/*                     test name to give */}
                            {/*                                  |    */}
                            {/*                                  V    */}
                            <h1 className={style.test_head}>{cod.name}</h1>
                            <img src="document_icon.png" className={style.documentIcon} alt="document icon" />
                            <button className={style.btn} onClick={() => {
                                settest_( cod.name )
                                console.log(test_)
                                if(test_!="" && test_!=undefined){
                                    dispatch(incrementByAmount(test_))
                                    console.log(count+"before")
                                }
                                console.log(count+"after")
                                if ((count != "" && count != undefined )) {
                                    
                                    
                                    console.log("hiiiiiiiiiiiiiiii1123")
                                    setprev(count)
                                    navigate("/question")
                                    
                                }
                            }}>start</button>
                        </div>
                    )
                })}


            </div>
        </>
    );

};


export default Exam;


<div className={style.card5} style={{"background-image" : "url(bg_card.png)"}}>
<img src="document_icon.png" className={style.documentIcon5} alt="document icon" />
<div className={style.subName5}>Engineering Mechanics</div>
<button type="submit" className={style.btn}>View</button>
</div>