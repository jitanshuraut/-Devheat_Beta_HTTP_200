import React, { useState, useEffect } from 'react'
import style from "../style/Main.module.css"
import { db } from "../firebase-con_ext"
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate();
  const [que, setque] = useState("")
  const [ans, setans] = useState("")
  const [name, setname] = useState("")
  const [show, setshow] = useState("false")
  const [user, setuser] = useState([])
  const [timer, settimer] = useState("")

  const ref = collection(db, "test")



  const add = async () => {
    console.log(que, ans, name, show)
    await addDoc(ref, { name: name, question: que, answer: ans })
    setque("")
    setans("")
  }
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(ref);
      setuser(data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id })
      ))
    }
    getuser()
  }, [add])
  return (
    <>


      <div className={style.form3}>
        <div className={style.form2}>
          <div className={style.text1}>Test name</div>
          <input onChange={(e) => {
            setname(e.target.value)
          }} type="text" className={style.textbox} id={style.textbox} placeholder="Enter here" />
        </div>
      </div>
      <br />
      <div className={style.form3}>


        <div className={style.form2}>
          <div className={style.text1}>Question</div>
          <input onChange={(e) => {
            setque(e.target.value)
          }} type="text" className={style.textbox} id={style.textbox} placeholder="Enter here" />
        </div>

        <div className={style.form2}>
          <div className={style.text1}>Answer</div>
          <textarea onChange={(e) => {
            setans(e.target.value)
          }} type="text" className={style.textbox} id={style.textbox} placeholder="Enter here" />
        </div>
        <div className={style.extt}>
          <button className={style.btn} onClick={()=>{navigate("/dashboard")}}  >submit</button>
          <button className={style.btn} onClick={() => {
            add()
          }}>Add</button>

        </div>
        <h1 className={style.head_en}>Do you want to show in  Exam?</h1>
        <div className={style.radio}>
          <input type="radio" onChange={() => {
            setshow("true")
          }}
            id="html" name="fav_language" />
          <label htmlFor="html" style={{ "marginRight": "10px" }}>enabel</label><br />
          <input type="radio" onChange={() => {
            setshow("false")
          }} id="css" name="fav_language" />
          <label for="css">disable</label>
        </div>
      </div>







      <div className={style.sidebox}>
        <div className={style.ext}>
          {/*------------------------------------>>>>>> test_given */}
          <h1 className={style.head}>Question</h1>
          {
            user.map((user) => {
              return (
                <div className={style.card6}>
                  <div className={style.subName5}>Question:</div>
                  <p className={style.textbox5}>{user.question}</p>
                  <div className={style.subName5}>Answer:</div>
                  <p className={style.textbox}>{user.answer} </p>
                </div>)
            })
          }
        </div>
      </div>
      {

      }


    </>
  )
}

export default Test

