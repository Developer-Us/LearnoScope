import React from "react";
import '../Styles/Signup.css';
import { useEffect } from 'react';

export default function Signup() {
  useEffect(() => {
    let windowWidth = window.matchMedia("(min-width: 1077px)");
    if (windowWidth.matches) {
      document.getElementById("Signup").className = "w-25 shadow p-3 mb-5 bg-body mx-auto my-5 ";
    }
    else {
      document.getElementById("Signup").className = "w-75 shadow p-3 mb-5 bg-body mx-auto my-5 t";
    }
  });
  return (
    <div id="Signup" className="w-25 shadow p-3 mb-5 bg-body mx-auto my-5 " style={{ height: "58rem", display: "flex" }}>
      <div className='container mx-3 my-3'>
        <form method="post" encType="multipart/form-data" action="https://developerus.herokuapp.com/register/">
          <div id="Proflie_picture_selector" className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          </div>
          <div className='fs-5 text-center my-2'>Signup</div>
          <hr />
          {/* profile_pic */}
          <div className="mb-3 my-3">
            <small className="mx-auto">Select Profile Picture</small>
            <input name="profile_pic" type="file" className="form-control form-control-sm" placeholder="Select Profile Picture" />
          </div>
          <hr />
          {/* firstName */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">First Name<span className="mandatory_sign">*</span></label>
            <input name="firstName" type="text" className="form-control input_tag" />
          </div>
          {/* lastName  */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">Last Name<span className="mandatory_sign">*</span></label>
            <input name="lastName" type="text" className="form-control input_tag" />
          </div>
          {/* username  */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">Username<span className="mandatory_sign">*</span></label>
            <input name="username" type="text" className="form-control input_tag" />
          </div>
          {/* email  */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">Email<span className="mandatory_sign">*</span></label>
            <input name="email" type="email" className="form-control input_tag" />
          </div>
          {/* password  */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">Password<span className="mandatory_sign">*</span></label>
            <input name="password" type="password" className="form-control input_tag" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="label">Confirm Password<span className="mandatory_sign">*</span></label>
            <input type="password" className="form-control input_tag" />
          </div>
          <div className='text-center'>
            <button id="Signup_btn" type="submit" className="btn btn-info my-3 btn_custom" style={{ "alignSelf": "center" }}>Create Account</button>
          </div>
          {/* <div className='text-center'>
            <button id="loginBtn" type="submit" className="btn btn-info my-2 mx-2 google_btn" style={{ "alignSelf": "center" }}><img className="mx-2" src="Images/icon-google.png" height="35px" alt="" />Sign with Google</button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
