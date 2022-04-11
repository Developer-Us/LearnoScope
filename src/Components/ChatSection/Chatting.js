import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserDataContext from '../../Context/UserData/UserDataContext';
import '../../Styles/Message.css';


export default function Chatting() {
  const userData = useContext(UserDataContext);

  useEffect(() => {
    let messages = ``;
    document.getElementById("ChatRoomName").innerText = localStorage.getItem("roomName");

    for (let i = 0; i < userData.roomMessages.length; i++) {
        messages += `<div class="card shadow-lg p-3 mb-3 bg-body rounded" id="message">
                  <span class='senderName'>${userData.roomMessages[i].username}</span>
                  <span class="timestampOfMessage"><small>${userData.roomMessages[i].timestamp}</small></span>
                  <hr />
                  <div>
                      ${userData.roomMessages[i].value}
                </div>
            </div>

         `;
    }
 
    document.getElementById("chattingSection").innerHTML = ``;
    document.getElementById("chattingSection").innerHTML = messages;
  })

  function handleMessageSending(e) {
    e.preventDefault();
    if (document.getElementById('messageInput').value.length === 0) {
      alert('Message Cannot be empty');
    }
    else {
      sendMessage();
    }
  }

  async function sendMessage() {
    let sendMessageObj = {
      "roomName": localStorage.getItem("roomName"),
      "roomPass": localStorage.getItem("roomPass"),
      "email": localStorage.getItem("userEmail"),
      "message_value": document.getElementById("messageInput").value
    }
   
    await fetch('https://developerus.herokuapp.com/SendMessage/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendMessageObj),
    }).then(response => response.json()).then((data) => {
      if (data.status === 404) {
        alert(data.response);
      }
      else{
     document.getElementById("messageInput").value = "";
      }
    });
  }

  let updateChat = {
    "roomName": localStorage.getItem("roomName"),
    "roomPass": localStorage.getItem("roomPass"),
    "email": localStorage.getItem("userEmail")
  }

  async function updateData() {
try{
  await fetch('https://developerus.herokuapp.com/GetChatRoom/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateChat),
  }).then(response => response.json()).then((data) => {
    if (data.status === 404) {
      alert(data.response);
    }
    else {
      userData.setRoomMessages(data);
      console.log(typeof(data));
    }
  });
}
catch(error){
  console.log("server err");
}
  }
   
  setInterval(updateData,5000);
 
  

  return (

    <>
      <div id="messageAlert" className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong id="usernameForGreet"> </strong>&nbsp;Entered the Room Successfully :)
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>


      <div className="container card shadow-lg p-3 mb-5 bg-body rounded" style={{ maxWidth: "800px", minWidth: "200px", display: "flex" }} >
        <div id="ChatRoomName" className='fs-4 my-1 text-center'></div>
        <p className="text-center">Created by Madhukrishna Nipankar</p>
        <hr />

        <div id="chattingSection" style={{ height: "400px", backgroundColor: "rgb(198, 227, 251)", overflow: "hidden", overflowY: "scroll" }}>

        </div>


        <form action="" onSubmit={handleMessageSending}>
          <div className="mb-3 d-flex my-3">
            <input type="text" id="messageInput" className="form-control" placeholder="Enter your message here" />
            <button id="sendMessageBtn" className="btn btn-primary mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
          </div>
        </form>


      </div>
    </>
  )
}
