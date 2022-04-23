import React from 'react';
import { useEffect } from 'react';
import VideoCard from './VideoCard';
import Videoarray from './Videoarray';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';

let vidArray=[]; 
export default function VideoFeed() {
       
    const is_loggedin = useContext(LoggedInStatusContext);
    const applicationMode = useContext(ApplicationModeContext);


  async  function getVideoFeed() {
        let userObject = {
            "email": localStorage.getItem('userEmail')
        }
  await  fetch('https://developerus.herokuapp.com/getVideoFeed/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
                let profile_pic_src = "https://developerus.herokuapp.com" + data.profile_pic.profile_pic;
                document.getElementById("dashboard-user-profile-pic").src = profile_pic_src;
                for(var i=0;i<data.response.length;i++)
                {
                    vidArray[i]={};
                    vidArray[i].title=data.response[i].video_title;
                    vidArray[i].desc=data.response[i].video_desc;
                    vidArray[i].thumbnail=data.response[i].video_thumbnail;
                }
                console.log(vidArray.length);
            }
            else {
                // console.log(data);
            }
        });
    }
    console.log("outside the func : ");
    console.log(vidArray.length);
    useEffect(() => {
        if (applicationMode.mode === "light")
        {
            document.getElementById("wishUser").style.color = "black"; 
        }
        else
        {
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
            <h1 id="h"></h1>
            <div id="GreetingAlert" style={{ display: "none" }} className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong id="usernameForGreet"> </strong>&nbsp;Logged in Successfully :)
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div id="wishUser" style={{ display: "none"}} className="text-center container my-3 mx-auto p-3 mb-5 fs-2"><span id="wishUser-time"></span> <strong id="wishUser-username"></strong> !</div>
            <div className="d-flex my-5" style={{ flexWrap: "wrap", justifyContent: "center" }}>
            {
            vidArray.map((val)=>{
            return(
                <>
             <VideoCard videoTitle={val.title} videoThumbnail={val.thumbnail} channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                </>
            )
            })
            }
                {/* <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/>
                <VideoCard videoTitle="Shivray Trailer HD" videoThumbnail="Images/VedioThumnail.jpg" channelName="T-Series" views="200" videoUploadingTime="13 jan 2022"/> */}
            </div>
        </div>


    )
     

}
