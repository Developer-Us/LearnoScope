import React from 'react'
import '../Styles/VideoFeed.css';
import '../Styles/VideoCard.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../Context/UserData/UserDataContext';

export default function VideoCard(props) {
    const is_loggedin = useContext(LoggedInStatusContext);
    const userData = useContext(UserDataContext);

    const handleVideoCardClick = (id)=>{
        // console.log("clicked",id);
        // console.log(userData.videoFeedData);

        for(var i=0;i<userData.videoFeedData.length;i++)
        {
          if(userData.videoFeedData[i].sno === id){
              userData.setCurrentVideoLink("https://developerus.herokuapp.com"+(userData.videoFeedData[i].video_file));
              userData.setCurrentVideoTitle((userData.videoFeedData[i].title));
              break;
          }
        }
    }

    if (is_loggedin.loggedin === true) {
        return (
            <Link to="/videoWatchSection" style={{ textDecoration: "none", color: "black" }} >
                <div id={props.sno} onClick={()=>{handleVideoCardClick(props.sno)}} className="videoCard card my-3 mx-3 shadow  bg-body rounded" style={{ "width": "21rem" }}>
                    <div style={{ "width": "21rem", "height": "12rem", backgroundColor: "grey" }}>
                        <img src={props.videoThumbnail} alt="loading.." style={{ "width": "21rem", "height": "12rem" }} />
                    </div>

                    <div id="VedioDetail">
                        <span id="logo"><img src="Images/NetflixLogo.png" style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                        <ul style={{ marginLeft: "-18px" }}>
                            <li><div style={{ width: "250px", height: "24px", overflow: "hidden", fontWeight: "bold" }}> {props.videoTitle}</div></li>
                            <li>{props.channelName}</li>
                            <li>{props.views} views . {props.videoUploadingTime}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        )
    }
    else {
        return (
            <Link to="/login" style={{ textDecoration: "none", color: "black" }} >
                <div className="videoCard card my-3 mx-3 shadow  bg-body rounded" style={{ "width": "21rem" }}>
                    <div style={{ "width": "21rem", "height": "12rem", backgroundColor: "grey" }}>
                        <img src={props.videoThumbnail} alt="loading.." style={{ "width": "21rem", "height": "12rem" }} />
                    </div>

                    <div id="VedioDetail">
                        <span id="logo"><img src="Images/NetflixLogo.png" style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                        <ul style={{ marginLeft: "-18px" }}>
                            <li><div style={{ width: "250px", height: "24px", overflow: "hidden", fontWeight: "bold" }}>Kota Factory - 2 | Official Trailer this is more additional title text which will not get displayed !  </div></li>
                            <li>Netflix</li>
                            <li>3M views . 2 days ago</li>
                        </ul>
                    </div>
                </div>
            </Link>
        )
    }
}

