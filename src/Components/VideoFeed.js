import React from 'react';
import { useEffect } from 'react';
import VideoCard from './VideoCard';
import { useState } from 'react';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';
import Spinner from './Spinner';
import UserDataContext from '../Context/UserData/UserDataContext';


let vidArray = [];
export default function VideoFeed() {

    const is_loggedin = useContext(LoggedInStatusContext);
    const applicationMode = useContext(ApplicationModeContext);
    const userData = useContext(UserDataContext);
    const [loading, setLoading] = useState(true);
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
            // setLoading(false);
            if (data.status === 200) {
                console.log(data);
                let profile_pic_src = "https://developerus.herokuapp.com" + data.profile_pic.profile_pic;
                document.getElementById("dashboard-user-profile-pic").src = profile_pic_src;
                for (var i = 0; i < data.response.length; i++) {
                    vidArray[i] = {};
                    vidArray[i].title = data.response[i].video_title;
                    vidArray[i].desc = data.response[i].video_desc;
                    vidArray[i].thumbnail = data.response[i].video_thumbnail;
                    vidArray[i].sno = data.response[i].sno;
                    vidArray[i].video_file = data.response[i].video_file;
                    vidArray[i].video_views = data.response[i].video_views;
                    vidArray[i].timestamp = data.response[i].timestamp;
                    vidArray[i].channelName = data.response[i].username;
                    vidArray[i].video_likes = data.response[i].video_likes;
                    vidArray[i].video_desc = data.response[i].video_desc;
                    vidArray[i].notes_file = "https://developerus.herokuapp.com" + data.response[i].notes_file;
                    vidArray[i].sno = data.response[i].sno;
                }
                // console.log(vidArray.length);
                userData.setVideoFeedData(vidArray);
            }
            else {
            }
            setLoading(false);
        });
    }
    useEffect(() => {
        if (applicationMode.mode === "light") {
            document.getElementById("wishUser").style.color = "black";
        }
        else {
            document.getElementById("wishUser").style.color = "white";

        }
        if (is_loggedin.loggedin === true) {
            getVideoFeed();
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
    // for getting video feed
    return (
        <div>
            <div id="GreetingAlert" style={{ display: "none" }} className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong id="usernameForGreet"> </strong>&nbsp;Logged in Successfully :)
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div id="wishUser" style={{ display: "none" }} className="text-center container my-3 mx-auto p-3 mb-5 fs-2"><span id="wishUser-time"></span> <strong id="wishUser-username"></strong> !</div>
            <div className="d-flex my-5" style={{ flexWrap: "wrap", justifyContent: "center" }}>
                {loading && is_loggedin.loggedin && <Spinner />}
                {!is_loggedin.loggedin && "Kindly Login First"}
                {
                    !loading &&
                    vidArray.map((val) => {
                        return (
                            <>
                                <VideoCard key={val.sno + 4} sno={val.sno} videoTitle={val.title} videoThumbnail={"https://developerus.herokuapp.com" + val.thumbnail} channelName={val.channelName} views={val.video_views} videoUploadingTime={(val.timestamp).split("T")[0]} />
                            </>
                        )
                    })
                }
            </div>
        </div>


    )


}
