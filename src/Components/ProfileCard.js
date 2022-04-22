import React from 'react';
import '../Styles/ProfileCard.css';

export default function ProfileCard() {
  const editHandler = () =>{
    document.getElementById("bio").style.display = "block";
    document.getElementById("Save_Btn").style.display = "block";
    // document.getElementById('bio').style.transition = "all 1s ease-out";
    // document.getElementById('Save_Btn').style.transition = "all 1s ease-out";

  }
  const saveHandler = () =>{
    document.getElementById("bio").style.display = "none";
    document.getElementById("Save_Btn").style.display = "none";
    // document.getElementById('bio').style.transition = "all 1s ease-out";
    // document.getElementById('Save_Btn').style.transition = "all 1s ease-out";
  }
  return (
    <>
      <div id="ProfilePic" className="d-inline-flex">
        <img src="Images/demo.jpg" width="200px" height="200px" className="mx-5 my-auto rounded-circle" />
        <div id="name" className="mx-auto my-auto p-2 position-relative">
          <h1 className="" style={{width: "1130px"}}>Amit Sali<span onClick={editHandler} className="btn btn-primary position-absolute end-0 mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg></span></h1>
          <textarea className="form-control" id="bio" rows="4" cols="90" placeholder="Enter Bio" name="Bio" style={{display:"none"}}></textarea>
          <div className="btn btn-primary position-absolute end-0 my-1 mx-1" onClick={saveHandler} id="Save_Btn" style={{display:"none"}}>Save</div>
        </div>
      </div>
    </>
  )
}
