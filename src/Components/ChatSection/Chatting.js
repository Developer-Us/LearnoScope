import React from 'react';
import Message from './Message';

export default function Chatting() {

  return (
    <>
      <div id="messageAlert" className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong id="usernameForGreet"> </strong>&nbsp;Entered the Room Successfully :)
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>


      <div className="container card shadow-lg p-3 mb-5 bg-body rounded" style={{ maxWidth: "800px",minWidth:"200px", display: "flex" }} >
        <div id="ChatRoomName" className='fs-4 my-1 text-center'>Developers</div>
        <p className="text-center">Created by Madhukrishna Nipankar</p>
        <hr />

        <div id="chattingSection"  style={{ height: "400px", backgroundColor: "rgb(198, 227, 251)",overflow:"hidden",overflowY:"scroll" }}>
          <Message senderName="Madhukrishna Nipankar" />
          <Message senderName="Yadnesh Gangurde" />
          <Message senderName="Vedant Kulkarni" />
          <Message senderName="Madhukrishna Nipankar" />
          <Message senderName="Amit Sali" />
          <Message senderName="Kiran Dahake" />
        </div>


        <div className="mb-3 d-flex my-3">
          <input type="text" id="messageInput" className="form-control" placeholder="Enter your message here" />
          <button className="btn btn-primary mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </button>

        </div>


      </div>
    </>
  )
}
