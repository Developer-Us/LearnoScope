import React from 'react'
import '../Styles/VideoFeed.css';


export default function VideoCard() {


    return (
            <div id="videoCard"  className="card my-3 mx-3 shadow  bg-body rounded" style={{ "width": "20rem" }}>
                <img src="Images/VedioThumnail.jpg" bgcolor="grey" alt="loading.." style={{ "width": "20rem" }} />

                <div id="VedioDetail">
                    <span id="logo"><img src="Images/tech.webp" style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                    <ul style={{marginLeft:"-14px"}}>
                        <li><div style={{ width: "250px", height: "24px",overflow:"hidden",fontWeight:"bold" }}>Website making in 40 minutes</div></li>
                        <li>Technical Fande</li>
                        <li>45k views . 2 years ago</li>
                    </ul>
                </div>
            </div>
    
    )
}

