import React, { useState } from "react";

export const Driver = () => {
  function subs() {
    console.log("click");
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a - b;
    document.getElementById("answer").value = c;
  }
  const [count, setCount] = useState(0);

  async function getData() {
    const dat = await fetch("http://127.0.0.1:4000");
    const res = await dat.json();
    setCount(res.counter);
  }
  getData();

  return (
    <div className='container d-flex justify-content-center align-items-center  border bg-info mw-100  p-3'>
       
    <div className="driver-container">
      <div className="passenger-waiting">
        <h1>Passengers Waiting</h1>
        <h1>{count}</h1>
      </div>
      <div>
     
        <div className="row ">

            <div className="col">
            <p>Total Seats</p>
            <p>Filled Seats</p>
            </div>

            <div className="col ">
            <input id="first" type="text" />
            <input id="second" type="text" />
            </div>
        </div>
        

      <button onClick={subs}>Submit</button>
      <div className="available-seats">
        <h1>Available Seats</h1>
        <input id="answer"></input>
      </div>
    </div>
    </div>
    </div>
  );
};
