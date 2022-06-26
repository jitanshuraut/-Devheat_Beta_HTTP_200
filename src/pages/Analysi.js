import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react';
import style from "../style/analysis.module.css"
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function Analysi() {
  const [code, setcode] = useState([])
  const [code_, setcode_] = useState([])
  const [data_, setdata_] = useState({})
  let name = []
  let marks = []
  let t = 0

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js  Chart',
      },
    },
  };

  const q = query(collection(db, "marks"), where("name", "==", "test1"));
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




  code_.forEach(element => {
    name = [...name, element.reg]
    marks = [...marks, element.marks]
  });
  console.log("ma")
  // name=[...name,"demo"]
  console.log(name)
  // marks=[...marks,10]
  console.log(marks)
  console.log("ma")








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


      <h1 className={style.head}>
        Analytics
      </h1>
      <div className={style.main}>
        {/*--------------------------->>>>>>> chart */}
        <div className={style.exxt}>
          <div className={style.card3}>
            <div className={style.left}>
              <div className={style.name}>Engineering Mechanics Quiz</div>
              <div className={style.text1}>Welcome to Engineering Mechanics Quiz! You have 1 hour to complete this Quiz. All the Best!</div>

            </div>

            <img src="rocket.png" alt="Rocket img" className={style.img5} />
          </div>
          <div className={style.chartcon}>
            <Bar options={options} data={data} style={{ width: "90%", height: "450px", padding: "20px", margin: "auto", margin: "20px", borderRadius: "20px", fontSize: "60px" }} />
          </div>

        </div>


        <div className={style.sidebox}>
          <div className={style.ext}>
            {/*------------------------------------>>>>>> test_given */}
            <h1 className={style.head}>Data</h1>
            {
              code_.map((element) => {
                return (
                  <div className={style.test_give}>
                    <div className={style.img}>
                      <img src="svg/iCON (M).png" className={style.J_pp_img} />
                    </div>
                    <div className={style.name}>
                      <h1 className={style.box_name}>{element.reg}</h1>
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
  )
}

export default Analysi


