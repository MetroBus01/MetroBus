import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";






export default function User() {


  const [openDialog, handleDisplay] = React.useState(false);
  const [currentCount, updateCurrentCount] = useState(0);

  async function inc() {
    console.log('click')
    const options = {
      method: 'POST'
    }
    await fetch('http://127.0.0.1:4000/update?updateCount='+currentCount, options)
    updateCurrentCount(0)
    handleDisplay(false)
    alert("Updated")
  }

  function increment() {
    updateCurrentCount(currentCount + 1)
  }
  function decrement() {
    if( currentCount <= 0) return;
    updateCurrentCount(currentCount - 1)
  }

  const handleClose = () => {
     handleDisplay(false);
  };

  const openDialogBox = () => {
     handleDisplay(true);
  };
  const buttonStyle = {
     width: "10rem",
     fontsize: "1.5rem",
     height: "2rem",
     padding: "5px",
     borderRadius: "10px",
     backgroundColor: "green",
     color: "White",
     border: "2px solid yellow",
  };
  const divStyle = {
     display: "flex",
     felxDirection: "row",
     position: "absolute",
     right: "0px",
     bottom: "0px",
     // padding: "1rem",
  };
  const confirmButtonStyle = {
     width: "5rem",
     height: "1.5rem",
     fontsize: "1rem",
     backgroundColor: "grey",
     color: "black",
     margin: "5px",
     borderRadius: "10px",
     border: "1px solid black",
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Dialog onClose = {handleClose} open = {openDialog}>
            <DialogTitle> Confirm Dialog </DialogTitle>
            <h3 style = {{ marginTop: "-10px", padding: "5px 10px" }}>
                  Select number of passengers? {" "}
            </h3>
            <br></br>
            <button onClick={increment}>+ </button>
            <p> { currentCount} </p>
            <button onClick={decrement}>+ </button>

            <div style = {divStyle}>
               <button style = {confirmButtonStyle} onClick = {inc}>
                  Confirm
               </button>
               <button style = {confirmButtonStyle} onClick = {handleClose}>
                  Cancel
               </button>
            </div>
         </Dialog>
      <div className='container-fluid '>
        <div class="row ">
          <div class="col col-lg-10">
            <h2>Tumakuru KSRTC Bus Stand</h2>
            <h2>KSRTC Government Bus Stand Tumkur</h2>
            <h2>Townhall Bus Stop</h2>
            <h2>KSRTC Bus Depot</h2>
            <h2>Private Bus Stand, Tumkur</h2>
            <h2>Siddaganga Bus Station</h2>
            <h2>Townhall Bus Stop</h2>
            <h2>Tumkur Government bus stand</h2>
            <h2>KR Extension Bus Stop</h2>
            <h2>Kote Anjaneya Bus Stop</h2>
            <h2>Shivaramakarantha nagara bus stand</h2>
            <h2>Ashoka main road tumkur Opp KSRTC Bus stand</h2>
            <h2>KSRTC Bus Depot</h2>
            <h2>KSRTC Bus Stand</h2>
            <h2>Majestic Bus Stop</h2>
          </div>
          <div class="col d-flex flex-column justify-content-between p-2">
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
            <button type="button" onClick={openDialogBox} class="btn btn-outline-primary btn-sm">Select</button>
          </div>
        </div>
      </div>

    </div>
  );
}