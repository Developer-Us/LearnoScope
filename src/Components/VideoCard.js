import React from 'react'
import '../Styles/VideoFeed.css';
import '../Styles/VideoCard.css';




export default function VideoCard() {


    return (
            <div id="videoCard"  className="card my-3 mx-3 shadow  bg-body rounded" style={{ "width": "21rem" }}>
                <img src="Images/VedioThumnail.jpg" bgcolor="grey" alt="loading.." style={{ "width": "21rem" }} />

                <div id="VedioDetail">
                    <span id="logo"><img src="Images/NetflixLogo.png" style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                    <ul style={{marginLeft:"-18px"}}>
                        <li><div style={{ width: "250px", height: "24px",overflow:"hidden",fontWeight:"bold" }}>Kota Factory - 2 | Official Trailer this is more additional title text which will not get displayed !  </div></li>
                        <li>Netflix</li>
                        <li>3M views . 2 days ago</li>
                    </ul>
                </div>
            </div>
    
    )
}

