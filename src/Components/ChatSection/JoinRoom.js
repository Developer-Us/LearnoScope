import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import LoggedInStatusContext from '../../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../../Context/UserData/UserDataContext';


export default function JoinRoom() {
  const is_loggedin = useContext(LoggedInStatusContext);
  const userData = useContext(UserDataContext);

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
    }

  });

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (document.getElementById('roomName').value.length === 0) {
      alert('Room Name Cannot be empty');
    }
    else if (document.getElementById('roomPass').value.length === 0) {
      alert('Room Pass field Cannot be empty');
    }
    else {
      joinRoom();
    }
  }

  async function joinRoom() {
    let joinRoomObj = {
      "roomName": document.getElementById("roomName").value,
      "roomPass": document.getElementById("roomPass").value,
      "email": localStorage.getItem("userEmail")
    }

    localStorage.setItem("roomName", document.getElementById("roomName").value);
    localStorage.setItem("roomPass",document.getElementById("roomPass").value)
    await fetch(`${userData.backendApi}/GetChatRoom/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joinRoomObj),
    }).then(response => response.json()).then((data) => {
      if (data.status === 404) {
        alert(data.response);
      }
      else {
        document.getElementById("redirectToChatting").click();
        console.log(data);
      }
    });
  }

  return (
    <div>
      <div id="RoomCreationMessageAlert" style={{display:"none"}} className="alert alert-primary alert-dismissible fade show" role="alert">
        Room Named - <strong id="roomNameForAlert"> </strong>&nbsp; created successfully :)
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <Link to="/chatting" className='text-center' style={{ textDecoration: "none", color: "black" }}> <div id="redirectToChatting"></div></Link>
      <br />
      <br />
      <div className="container card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "350px", display: "flex" }} >
        <div id="createRoomTitle" className='fs-4 my-3 text-center'>Join Room</div>
        <form action="" className='container' onSubmit={handleJoinRoom}>
          <div className="mb-3">
            <input type="text" id="roomName" className="form-control" placeholder="Room Name" />
          </div>
          <div className="mb-3">
            <input type="password" id="roomPass" className="form-control" placeholder="Room Pass" />
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-plus" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </button>
          </center>
        </form>
      </div>
    </div>
  )
}
