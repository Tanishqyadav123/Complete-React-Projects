import { useEffect, useRef, useState } from "react";


// import './App.css'

function StopWatch() {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);

  // let [Id, setId] = useState("")
  let ulStyle = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
  };
  let navStyle = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "40px",
    backgroundColor: "#555",
    color: "#ddd",
  };
  let timerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    width: "50vw",
    margin: "200px auto",
    flexDirection: "column", 
    rowGap: "40px",
    border: "2px solid black",
    borderRadius: "50%",
  };

  let buttonStyle = {
    padding: "10px 12px",
    backgroundColor: "#2a81ff",
    border: "none",
    outline: "none",
    borderRadius: "13px",
    margin: "0px 12px",
  };

  // JavaScript for stopwatch starts here!!!!

  let sec = 0;
  let min = 0;
  let hr = 0;
  let id = useRef();


  const starTimer = () => {
    id.current = setInterval(() => {
      // console.log("Hii")
      sec = seconds + 1;
      seconds = sec;
      //  console.log(seconds)
      setSeconds(seconds);
      if (seconds == 60) {
        setSeconds(0);
        seconds = 0;
        min = minutes + 1;
        minutes = min;
        console.log(minutes);
        setMinutes(minutes);
        if (minutes === 60) {
          minutes = 0;
          hr = hours + 1;
          hours = hr;
          setHours(hours);
        }
      }
    }, 100);
  };

  const StopTimer = () => {
    console.log("Clicked on stop button");
    clearInterval(id.current);
    console.log(id);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const ResetTimer = () => {
    console.log("Click on Reset button");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(id.current);
  };
  return (
    <>
      <nav style={navStyle}>
        <div style={{ fontSize: "24px", color: "white" }}>MyStopWatch</div>
        <ul style={ulStyle}>
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
      </nav>



      <div className="timer" style={timerStyle}>
        <div
          id="currentTime"
          style={{ fontSize: "80px", fontWeight: "bolder" }}
        >
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
        <div
          className="buttons"
          style={{
            borderTop: "2px solid black",
            paddingTop: "20px",
            width: "50vw",
            textAlign: "center",
          }}
        >
          <button
            id="start"
            style={buttonStyle}
            onClick={() => {
              starTimer();
            }}
          >
            Start
          </button>
          <button
            id="stop"
            style={buttonStyle}
            onClick={() => {
              StopTimer();
            }}
          >
            Stop
          </button>
          <button
            id="reset"
            style={buttonStyle}
            onClick={() => {
              ResetTimer();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
