import React from 'react'
import { Link } from 'react-router-dom';


export default function ChatInterface() {
  return (
    <div className='container'>
      <p className="fs-2 my-5 mx-auto text-center ">👨‍💼🗣🤝👩‍💼 Select way to interact with others</p>

      <div className='container d-flex justify-content-center mx-auto'>
        <div className='mx-3 d-flex flex-column'>
         
         <Link to="/joinRoom" className='text-center' style={{ textDecoration: "none", color: "black" }}>
         <button type="button" className="btn btn-primary">
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-plus" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
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
