import React from 'react';
import { useEffect } from 'react';
import VideoCard from './VideoCard';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';


export default function VideoFeed(props) {
    const is_loggedin = useContext(LoggedInStatusContext);

    async function getVideoFeed() {
        let userObject = {
            "email": localStorage.getItem('userEmail')
        }
        await fetch('https://developerus.herokuapp.com/getVideoFeed/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
                let profile_pic_src = "https://developerus.herokuapp.com"+data.profile_pic.profile_pic;
                document.getElementById("dashboard-user-profile-pic").src = profile_pic_src;
            }
            else {
                console.log(data);
            }
        });
    }

    useEffect(() => {
          
        if(is_loggedin.loggedin === true){
            getVideoFeed(); // for getting video feed
        }

        if (localStorage.getItem("userEmail") !== null) {
            is_loggedin.setLoggedin(true);

            let noOfHrs = new Date().getHours();

            if (noOfHrs < 12)
                document.getElementById("wishUser-time").innerText = "🌞 Good Morning";
            else if (noOfHrs >= 12 && noOfHrs <= 17)
                document.getElementById("wishUser-time").innerText = "🌞Good Afternoon";
            else if (noOfHrs >= 17 && noOfHrs <= 24)
                document.getElementById("wishUser-time").innerText = "🌆 Good Evening";


            document.getElementById("wishUser-username").innerText = localStorage.getItem("username");
            document.getElementById("wishUser").style.display = "block";
        }
    })


    return (
        <div>
            <div id="GreetingAlert" style={{ display: "none" }} className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong id="usernameForGreet"> </strong>&nbsp;Logged in Successfully :)
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div id="wishUser" style={{ display: "none" }} className="text-center container my-3 mx-auto p-3 mb-5 fs-2"><span id="wishUser-time"></span> <strong id="wishUser-username"></strong> !</div>
            <div className="d-flex my-5" style={{ flexWrap: "wrap", justifyContent: "center" }}>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>


    )
}
