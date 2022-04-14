import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../Context/UserData/UserDataContext';
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';




export default function Navbar() {
    const is_loggedin = useContext(LoggedInStatusContext);
    const applicationMode = useContext(ApplicationModeContext);
    const userData = useContext(UserDataContext);

    const toggleProfileOption = () => {
        if (document.getElementById("profileDropdown").style.display === "none") {
            document.getElementById("profileDropdown").style.display = "block";
        }
        else {
            document.getElementById("profileDropdown").style.display = "none";
        }
    }

    //for user logout
    async function handleUserLogout() {
        console.log(userData.userEmail);

        let loginData = {
            "email": localStorage.getItem("userEmail"),
        }
        
        localStorage.removeItem("userEmail");

        await fetch('https://developerus.herokuapp.com/logoutUser/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            }).then(response => response.json()).then((data) => {
                if (data.status === 200) {
                    is_loggedin.setLoggedin(false);
                    document.getElementById("leftBar-LoginBtn").click();
                    document.getElementById("logoutAlert").style.display="block";
                    toggleProfileOption();
                }
                else {
                    alert(data.response);
                }
            });
    }


    useEffect(() => {
        let windowWidth = window.matchMedia("(max-width: 430px)");
        if (windowWidth.matches) {
            document.getElementById("LeftBarTogglerIcon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical left_bar_btn" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>`;
            document.getElementById("SearchIcon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>`;

            if (applicationMode.mode === "dark") {
                document.getElementById("ModeIcon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>`;
            }
            else {
                document.getElementById("ModeIcon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
               <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
               </svg>`;
            }

            document.getElementById("AppName").className = "App_Name mx-1"
        }
    });

    const SearchHandle = () => {
        let windowWidth = window.matchMedia("(max-width: 586px)");
        if (windowWidth.matches) {
            document.getElementById("LeftBarTogglerIcon").style.display = "none";
            document.getElementById("LearnoScopeLogo").style.display = "none";
            document.getElementById("AppName").style.display = "none";
            document.getElementById("ModeIcon").style.display = "none";
            document.getElementById("UserDashBoard").style.display = "none";
            document.getElementById("SearchBar").style.display = "block";
            document.getElementById("SearchBar").style.width = "220px";
            document.getElementById("Backbtn").style.display = "block"
            document.getElementById("Nav_SearchBar").className = "my-auto mx-auto d-flex";
        }
    }
    const GoBack = () => {
        document.getElementById("LeftBarTogglerIcon").style.display = "block";
        document.getElementById("LeftBarTogglerIcon").style.width = "20";
        document.getElementById("LeftBarTogglerIcon").style.height = "20";
        document.getElementById("LearnoScopeLogo").style.display = "inline-block";
        document.getElementById("AppName").style.display = "inline-block";
        document.getElementById("ModeIcon").style.display = "block";
        document.getElementById("UserDashBoard").style.display = "block";
        document.getElementById("SearchBar").style.display = "none";
        document.getElementById("Backbtn").style.display = "none"
    }

    /*For changing Mode(theme)of the application
    i.e Dark to Light and viceversa
    */
    const toggleMode = () => {
        if (applicationMode.mode === "light") {
            applicationMode.setMode("dark");
            document.getElementById("LearnoScopeLogo").style.filter = "invert(100%)";
            document.getElementById("ModeIcon").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>`;
            document.getElementById('body').style.backgroundColor = "#282828";
            document.getElementById('body').style.transition = "all 1s ease-out";
            document.getElementById('Navbar').style.transition = "all 1s ease-out";
        }
        else {
            applicationMode.setMode("light");
            document.getElementById("LearnoScopeLogo").style.filter = "sepia(100%)";
            document.getElementById("ModeIcon").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>`;
            document.getElementById('body').style.backgroundColor = "white";
            document.getElementById('body').style.transition = "all 1s ease-out";
            document.getElementById('Navbar').style.transition = "all 1s ease-out";
        }
    }

    if (is_loggedin.loggedin === false) {
        return (
            <div>
                <nav id="Navbar" className={applicationMode.mode === "dark" ? "my-2 mx-2 navbar-dark navbar-custom-dark align-items-center" : "my-2 mx-2 navbar-light navbar-custom-light align-items-center"} >
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <button id="LeftBarTogglerIcon" className={applicationMode.mode === "light" ? "btn btn-outline-dark p-2" : "btn btn-outline-light p-2"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                                {/* LeftBarToggler  */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical left_bar_btn" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>

                            <Link id="Application-logo" className="navbar-brand mx-2" to="/videoFeed">
                                <img id='LearnoScopeLogo' src="Logo/logo.png" alt="Logo" height="40px" />
                                <span className='App_Name mx-3' id='AppName'>LearnoScope</span>
                            </Link>
                        </div>

                        <div className="my-auto" id="">
                            <form className="d-flex " id='Nav_SearchBar'>
                                {/* Search Bar */}
                                <button id="Backbtn" className={applicationMode.mode === "light" ? " btn btn-outline-dark p-2 mx-2" : " btn btn-outline-light p-2 mx-2"} type="button" onClick={GoBack}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </button>


                                <input id='SearchBar' className="Search_Bar form-control-customize me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button id="SearchIcon" className={applicationMode.mode === "light" ? "btn btn-outline-dark p-2" : "btn btn-outline-light p-2"} type="button" onClick={SearchHandle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="d-flex justify-content-between my-auto">
                            {/* Dark mode /Light mode */}
                            <div className="mx-2" id='ModeIcon' onClick={toggleMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                </svg>
                            </div>


                            {/* user Dashboard/menu */}
                            <div className="mx-2" id='UserDashBoard'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ "cursor": "pointer" }} onClick={toggleProfileOption} width="30" height="30" fill={applicationMode.mode === "dark" ? "white" : "dark"} className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                                <div id="profileDropdown" className="card my-2 shadow p-3 mb-5 bg-body" style={{ "height": "auto", "width": "10rem", "position": "absolute", "zIndex": 5, "right": 11, "display": "none" }}>
                                    <div id="profileDropdownBox" className="card-body">
                                        <Link to="/login" style={{ textDecoration: "none", listStyle: "none", color: "black" }}>
                                            <p className="userProfileOptions">
                                                Login
                                            </p>
                                        </Link>

                                        <Link to="/signup" style={{ textDecoration: "none", listStyle: "none", color: "black" }}>
                                            <p className="userProfileOptions">
                                                Signup
                                            </p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    else {
        return (
            <div>
                <nav id="Navbar" className={applicationMode.mode === "dark" ? "my-2 mx-2 navbar-dark navbar-custom-dark align-items-center" : "my-2 mx-2 navbar-light navbar-custom-light align-items-center"} >
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <button id="LeftBarTogglerIcon" className={applicationMode.mode === "light" ? "btn btn-outline-dark p-2" : "btn btn-outline-light p-2"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                                {/* LeftBarToggler  */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical left_bar_btn" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>

                            <Link id="Application-logo" className="navbar-brand mx-2" to="/videoFeed">
                                <img id='LearnoScopeLogo' src="Logo/logo.png" alt="Logo" height="40px" />
                                <span className='App_Name mx-3' id='AppName'>LearnoScope</span>
                            </Link>
                        </div>

                        <div className="my-auto" id="">
                            <form className="d-flex " id='Nav_SearchBar'>
                                {/* Search Bar */}
                                <button id="Backbtn" className={applicationMode.mode === "light" ? " btn btn-outline-dark p-2 mx-2" : " btn btn-outline-light p-2 mx-2"} type="button" onClick={GoBack}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </button>


                                <input id='SearchBar' className="Search_Bar form-control-customize me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button id="SearchIcon" className={applicationMode.mode === "light" ? "btn btn-outline-dark p-2" : "btn btn-outline-light p-2"} type="button" onClick={SearchHandle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="d-flex justify-content-between my-auto">
                            {/* Dark mode /Light mode */}
                            <div className="mx-2" id='ModeIcon' onClick={toggleMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                </svg>
                            </div>


                            {/* user Dashboard/menu */}
                            <div className="mx-2" id='UserDashBoard'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ "cursor": "pointer" }} onClick={toggleProfileOption} width="30" height="30" fill={applicationMode.mode === "dark" ? "white" : "dark"} className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg> */}
                                <img src="Images/hill.jpg" id="dashboard-user-profile-pic" height="32" width="32" alt="" style={{borderRadius:"50%",cursor:"pointer"}} onClick={toggleProfileOption}/>

                                <div id="profileDropdown" className="card my-2 shadow p-3 mb-5 bg-body" style={{ "height": "auto", "width": "10rem", "position": "absolute", "zIndex": 5, "right": 11, "display": "none" }}>
                                    <div id="profileDropdownBox" className="card-body">
                                        <p className="userProfileOptions">
                                            Your Profile
                                        </p>
                                        <p onClick={handleUserLogout} id="userProfileOption-Logout" className="userProfileOptions">
                                            Logout
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
