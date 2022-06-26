import React from 'react';
import style from "./../style/Analytics.module.css"
import { useState, useEffect, useContext, useRef, useMemo } from 'react';
import { db } from "../firebase-con_ext"
import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Analytics = () => {
  const navigate = useNavigate();
    const count = useSelector((state)=>state.counter.log);

  const [code, setcode] = useState([])
  const [code_, setcode_] = useState([])
  const [data_, setdata_] = useState({})
  let name = []
  let marks = []
  let t = 0


  //---------------------------------------------------------->>>>data_from_firebase
  //                                                                student_id
  //                                                                  |
  //                                                                  V
  const q = query(collection(db, "marks"), where("reg", "==", `${count}`));
  useEffect(() => {

    const getuser = async () => {
      const data = await getDocs(q);
      setcode_(data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id })
      ))
    }
    getuser()
    console.log("1")
    console.log(code_)
    console.log('2')
  }, []);



  //------------------------------------------------->>>>data_to_show
  //------------------------------------------------>>>>>>>>>>>>>>>>>
  code_.forEach(element => {
    name = [...name, element.name]
    marks = [...marks, element.marks]
  });
  console.log("ma")
  console.log(name)
  console.log(marks)
  console.log("ma")



  //-------------------------------------------------->>>>>>>>>chart_setup
  //-------------------------------------------------->>>>>>>>>chart_setup
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart',
      },
    },
  };
  const labels = name;
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: marks,
        backgroundColor: '#2F327D',
        borderWidth: 2,
      }

    ],
  };

  return (

    <>
    {count==""?navigate("/"):console.log("yes")}

      <h1 className={style.head}>
        Analytics
      </h1>
<div className={style.main}>
      {/*--------------------------->>>>>>> chart */}
      <div className={style.exxt}>
      <div className={style.card3}>
                <div className={style.left}>
                    <div className={style.name}>Welcome to Analytics</div>
                    <div className={style.text1}>There are no secrets to success. It is the result of preparation, hard work, and learning from failure. Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.</div>
                   
                </div>

                    <img src="rocket.png" alt="Rocket img" className={style.img5}/>
            </div>
      <div className={style.chartcon}>
        <Bar options={options} data={data} style={{ width: "90%", height: "450px", padding: "20px", margin: "auto", margin: "20px", borderRadius: "20px", fontSize: "60px" }} />
      </div>
     
      </div>


<div className={style.sidebox}>
  <div className={style.ext}>
      {/*------------------------------------>>>>>> test_given */}
      <h1 className={style.head}>Recent Exams</h1>
      {
        code_.map((element) => {
          return (
            <div className={style.test_give}>
              <div className={style.img}>
                <img src="svg/iCON (M).png" className={style.J_pp_img} />
              </div>
              <div className={style.name}>
                <h1 className={style.box_name}>{element.name}</h1>
              </div>
              <div className={style.marks}>
                <h1 className={style.box_marks}>marks : {element.marks}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
      </div>
</div>
    </>
  );
};

export default Analytics;

