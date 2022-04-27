import React from 'react'
import '../Styles/Login.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import Spinner from './Spinner';
// contexts 
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../Context/UserData/UserDataContext';



export default function Login() {
    const is_loggedin = useContext(LoggedInStatusContext);
    const userData = useContext(UserDataContext);


    // FOR SHOWING SPINNER 
    const [loading, setLoading] = useState(false)

    const handleUserLogin = (e) => {
        e.preventDefault();
        if (document.getElementById('loginUsername').value.length === 0) {
            alert('Username Cannot be empty');
        }
        else if (document.getElementById('loginEmail').value.length === 0) {
            alert('email field Cannot be empty');
        }
        else if (document.getElementById('loginPassword').value.length === 0) {
            alert('password field Cannot be empty');
        }
        else {
            loginUser();
        }
    }

    async function loginUser() {
        userData.setUserEmail(document.getElementById("loginEmail").value);
        let userObject = {
            "username": document.getElementById("loginUsername").value,
            "password": document.getElementById("loginPassword").value,
            "email": document.getElementById("loginEmail").value
        }

        setLoading(true);
        await fetch(`${userData.backendApi}/loginUser/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            setLoading(false);

            if (data.status === 200) {
                is_loggedin.setLoggedin(true);
                localStorage.setItem("userEmail", userObject.email);
                localStorage.setItem("username", userObject.username);
                document.getElementById("Application-logo").click();
                document.getElementById("GreetingAlert").style.display = "block";
            }
            else {
                alert(data.response);
            }
        });
    }

    useEffect(() => {
        let windowWidth = window.matchMedia("(min-width: 1077px)");
        if (windowWidth.matches) {
            document.getElementById("Login").className = "w-50 shadow p-3 mb-5 bg-body mx-auto my-5 ";
        }
        else {
            document.getElementById("Login").className = "w-75 shadow p-3 mb-5 bg-body mx-auto my-5 t";
        }
    },[]);


    return (
        <>
            {loading && <Spinner />}
            {!loading &&
                <div>
                    <div id="logoutAlert" style={{ display: "none" }} className="alert alert-info alert-dismissible fade show" role="alert">
                        Logged out Successfully :)
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div id="Login" className="w-50 shadow p-3 mb-5 bg-body mx-auto my-5 " style={{ height: "30rem", display: "flex" }}>
                        <img id="loginImage" src="Images/Login.gif" width="50%" alt="" />
                        <div className='container mx-3 my-3'>
                            <div className='fs-5 text-center'>Login</div>
                            <hr />
                            <form action="" onSubmit={handleUserLogin} >
                                <div className="mb-2">
                                    <label htmlFor="exampleFormControlInput1" className="form-label" id="label">Username<span className="mandatory_sign">*</span></label>
                                    <input type="text" id="loginUsername" className="form-control input_tag" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="exampleFormControlInput1" className="form-label" id="label">Email<span className="mandatory_sign">*</span></label>
                                    <input type="email" id="loginEmail" className="form-control input_tag" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="exampleFormControlInput1" className="form-label " id="label">Password<span className="mandatory_sign">*</span></label>
                                    <input type="password" id="loginPassword" className="form-control input_tag" />
                                </div>

                                <div className='text-center'>
                                    <button type="submit" className=" loginBtn btn btn-info my-2 mx-2 custom_btn" style={{ "alignSelf": "center" }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
        </>

    )
}
