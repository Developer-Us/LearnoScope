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

    const handleVideoCardClick = (id) => {
        //for a particular video click
        for (var i = 0; i < userData.videoFeedData.length; i++) {
            if (userData.videoFeedData[i].sno === id) {
                userData.setCurrentVideoLink(`${userData.backendApi}` + (userData.videoFeedData[i].video_file));
                userData.setCurrentVideoTitle((userData.videoFeedData[i].title));
                userData.setCurrentVideoChannelName((userData.videoFeedData[i].channelName));
                userData.setCurrentVideoLikes((userData.videoFeedData[i].video_likes));
                userData.setCurrentSno((userData.videoFeedData[i].sno));
                userData.setCurrentVideoDesc((userData.videoFeedData[i].video_desc));
                userData.setCurrentVideoNotes((userData.videoFeedData[i].notes_file));
                userData.setCurrentVideoChannelPhoto((userData.videoFeedData[i].video_uploader_img));
                //for increasing video views
                increaseViewCount(userData.videoFeedData[i].sno);

                //adding video to history
                addToHistory(userData.videoFeedData[i].sno);
                break;
            }
        }
    }

    const addToBookmark = (id) => {
        document.getElementById(`addBookmarkSvg${id}`).style.color = "rgb(19, 124, 237)";
        asyncAddToBookmark(id);
    }


    async function increaseViewCount(sno) {
        let userObject = {
            "sno": sno,
            "email": localStorage.getItem("userEmail")
        }
        await fetch(`${userData.backendApi}/viewVideo/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
            }
            else {
            }
        });
    }

    async function addToHistory(sno) {
        let userObject = {
            "sno": sno,
            "email": localStorage.getItem("userEmail")
        }
        await fetch(`${userData.backendApi}/addToHistory/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
            }
            else {
            }
        });
    }
    async function asyncAddToBookmark(sno) {
        let userObject = {
            "sno": sno,
            "email": localStorage.getItem("userEmail")
        }
        await fetch(`${userData.backendApi}/addToBookmark/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {
            if (data.status === 200) {
            }
            else {
            }
        });
    }



    if (is_loggedin.loggedin === true) {
        return (
            <div id={props.sno} className="videoCard card my-3 mx-3 shadow  bg-body rounded" style={{ "width": "21rem" }}>
                <Link to="/videoWatchSection" style={{ textDecoration: "none", color: "black" }} >

                    <div onClick={() => { handleVideoCardClick(props.sno) }} style={{ "width": "21rem", "height": "12rem", backgroundColor: "grey" }}>
                        <img src={props.videoThumbnail} alt="loading.." style={{ "width": "21rem", "height": "12rem" }} />
                    </div>
                </Link>
                <div id="VedioDetail">

                    <span id="logo"><img src={props.videoChannelPhoto} style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                    <ul style={{ marginLeft: "-18px" }}>
                        <li><div style={{ width: "250px", height: "24px", overflow: "hidden", fontWeight: "bold" }}> {props.videoTitle}</div></li>
                        <li>{props.channelName}</li>
                        <li>{props.views} views . {props.videoUploadingTime}</li>
                    </ul>
                    <span id={`addBookmarkBtn${props.sno}`} onClick={() => { addToBookmark(props.sno) }} className='d-flex justify-content-end my-1'>
                        <svg id={`addBookmarkSvg${props.sno}`} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg>
                    </span>

                </div>

            </div>

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

