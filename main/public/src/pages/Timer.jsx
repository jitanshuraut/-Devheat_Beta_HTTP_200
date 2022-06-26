import React,{useEffect, useState} from 'react'

function Timer() {

const [timer, settimer] = useState(100)

useEffect(()=>{
setInterval(() => {
    settimer(timer-1)
}, 1000);

},[])
console.log(timer)

  return (
    <div>Timer</div>
  )
}

export default Timer