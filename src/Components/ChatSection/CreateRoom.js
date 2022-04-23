import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import LoggedInStatusContext from '../../Context/LoggedInStatus/LoggedInStatusContext';

export default function CreateRoom() {
  const is_loggedin = useContext(LoggedInStatusContext);

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
    }

  });

  const handleRoomCreation = (e) => {
    e.preventDefault();
    if (document.getElementById('create-roomName').value.length === 0) {
      alert('Room Name Cannot be empty');
    }
    else if (document.getElementById('create-roomPass').value.length === 0) {
      alert('Room Pass field Cannot be empty');
    }
    else {
      createNewRoom();
    }
  }

  async function createNewRoom() {
    let createRoomObj = {
      "roomName": document.getElementById("create-roomName").value,
      "roomPass": document.getElementById("create-roomPass").value,
      "email": localStorage.getItem("userEmail")
    }

    await fetch('https://developerus.herokuapp.com/makeNewChatRoom/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createRoomObj),
    }).then(response => response.json()).then((data) => {
      if (data.status === 404) {
        alert(data.response);
      }
      else {
        document.getElementById("redirectToJoinRoom").click();
        document.getElementById("RoomCreationMessageAlert").style.display="block";
        document.getElementById("roomNameForAlert").innerText = createRoomObj.roomName;
      }
    });
  }
  return (
    <div>
      <br />
      <br />
      <Link to="/joinRoom" className='text-center' style={{ textDecoration: "none", color: "black" }}> <div id="redirectToJoinRoom"></div></Link>
      <div className="container card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "350px", display: "flex" }} >
        <div id="createRoomTitle" className='fs-4 my-3 text-center'>Create New Room</div>
        <form action="" className='container' onSubmit={handleRoomCreation}>
          <div className="mb-3">
            <input type="text" className="form-control" id="create-roomName" placeholder="Room Name" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="create-roomPass" placeholder="Room Pass" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="create-conf-roomPass" placeholder="Confirm Room Pass" />
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
              </svg>
            </button>
          </center>
        </form>
      </div>
    </div>
  )
}
// api : makeNewChatRoom