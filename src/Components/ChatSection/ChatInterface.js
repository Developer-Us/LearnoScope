import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import ApplicationModeContext from '../../Context/ApplicationMode/ApplicationModeContext';
import LoggedInStatusContext from '../../Context/LoggedInStatus/LoggedInStatusContext';



export default function ChatInterface() {
  const applicationMode = useContext(ApplicationModeContext);
  const is_loggedin = useContext(LoggedInStatusContext);

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
    }

    if (applicationMode.mode === "light") {
      document.getElementById("HeaderText").style.color = "black";
      document.getElementById("joinRoom").style.color = "black";
      document.getElementById("createRoom").style.color = "black";

    }
    else {
      document.getElementById("HeaderText").style.color = "white";
      document.getElementById("joinRoom").style.color = "white";
      document.getElementById("createRoom").style.color = "white";
    }
  })
  return (
    <div className='container'>
      <p className="fs-2 my-5 mx-auto text-center " id="HeaderText">👨‍💼🗣🤝👩‍💼 Select way to interact with others</p>

      <div className='container d-flex justify-content-center mx-auto'>
        <div className='mx-3 d-flex flex-column'>

          <Link to="/joinRoom" className='text-center' style={{ textDecoration: "none", color: "black" }}>
            <button type="button" className="btn">
              <div className="card">
                <img id="Join_Room" height="500px" width="400px" src="Images/Join Grp.gif" alt="" />
              </div>
            </button>
          </Link>

          <span id="joinRoom" className="my-2">
            Join Room
          </span>
        </div>

        <div className='mx-3 d-flex flex-column'>
          <Link to="/createRoom" className='text-center' style={{ textDecoration: "none", color: "black" }}>
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
              </svg>
            </button>
          </Link>

          <span id="createRoom" className="my-2">
            Create Room
          </span>
        </div>
      </div>

    </div>
  )
}
