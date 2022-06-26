import { FaClock } from "react-icons/fa"
import { useState, useEffect, useRef } from 'react';
import style from "./../style/Question.module.css"
import { db } from "../firebase-con_ext"
import { useNavigate } from 'react-router-dom';
import { collection, doc, query, where, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { useSelector, useDispatch } from 'react-redux';





function Question() {

  const [count, setcount] = useState(0)
  const [timer, settimer] = useState(200)
  const [preventuseff, setpreventuseff] = useState(true)
  const click = useRef()
  const [text, settext] = useState([])
  console.log(count)
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [code, setcode] = useState([])
  const test_name = useSelector((state) => state.tester.test);
  console.log(test_name + "hiiiiiiiii" + "pppp")
  const dispatch = useDispatch();


  const coun = useSelector((state) => state.counter.log);
  //----------------->>>>timer logic
  //-------------------------->>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    if (preventuseff) {
      const temp = () => {
        settimer(timer => timer - 1)
      }

      const time = setInterval(
        temp
        , 1000);
      setpreventuseff(false)
      return () => {
        clearInterval(time)
      }

    }
  }, [])



  //--------------------------------->>>>>>>>>>>>import data_from Firebase
  //                                                        >> test name to take <<
  //                                                               |
  //                                                               V
  console.log(test_name)
  const q = query(collection(db, "test"), where("name", "==", `${test_name}`));
  const ref_marks = collection(db, "marks");
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(q);
      setcode(data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id })
      ))
    }
    getuser()
  }, [])
  const time_out = async () => {
    console.log(count + "submit")
    await addDoc(ref_marks, { name: `${test_name}`, reg: `${coun}`, marks: count })
    navigate('/timeout')
  }

  //-------------------------------->>>submiting the marks
  //-------------------------------->>>>>>>>>>>>>>>>
  const submit = async () => {
    console.log(count + "submit")

    await addDoc(ref_marks, { name: `${test_name}`, reg: `${coun}`, marks: count })
    navigate('/dashboard')
  }




  return (
    <>
      {/* ----------------->>>timer logic to navigate time out */}
      {timer ? console.log("yes") : navigate("/timeout")}
      {/* ----------------------------------->>>head */}
      <div className={style.tophead}>
        <h1 className={style.exam}>Exam-Maths</h1>
        <div className={style.timer}><FaClock style={{ "backgroundColor": "transparent" }} />
          <div className={style.exttimer}> {timer}</div></div>
      </div>



      {/* ------------------------------ >>> displaying the question */}
      {code.map((code) => {
        return (<div>
          <div className={style.container}>
            <h1 className={style.h1}>question: </h1>
            <p className={style.ptag}>{code.question} </p>
            <textarea
              type="textarea" onChange={(e) => {
                settext(e.target.value)
              }} className={style.textarea} />
          </div>
          <div className={style.extbutton}>
            <button class={style.button}
              onClick={() => {
                if (text == code.answer) {
                  setcount(count + 1)
                  settext("")
                }

              }}
              role="button">

              conformation</button>
          </div>
        </div>)
      })}
      {/*--------------------------->>> modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 id="exampleModalLabel">Conformation</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={style.modalbody}>
              <h1 className={style.modalhead}>do yo want to submit?</h1>
            </div>
            <div className={style.footer}>
              <button type="button" class={style.button_ext} data-bs-dismiss="modal">Close</button>
              <button type="button" class={style.button_ext} onClick={() => { submit() }} data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------->>> submit */}
      <button ref={click} className={style.button_}
        type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" > submit</button>
    </>

  )
}

export default Question