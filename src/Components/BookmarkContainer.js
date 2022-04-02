import React from "react";

export default function Bookmark() {
  return (
    <>
     <div className="col">
          <div className="card m-3">
            <img src="Images/hill.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div id="VedioDetail">
                    <span id="logo"><img src="Images/NetflixLogo.png" style={{ borderRadius: "50%" }} height="40px" width="40px" alt=".." /></span>
                    <ul style={{marginLeft:"-18px"}}>
                        <li><div style={{ width: "250px", height: "24px",overflow:"hidden",fontWeight:"bold" }}>Kota Factory - 2 | Official Trailer this is more additional title text which will not get displayed !  </div></li>
                        <li>Netflix</li>
                        <li>3M views . 2 days ago</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    </>
  );
}




