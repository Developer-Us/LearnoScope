import React from "react";
import ProfileCard from "./ProfileCard";
// import VideoCard from "./VideoCard";
import VideoFeed from "./VideoFeed";

export default function UserProfile() {
  return (
    <>
      <ProfileCard />

      <br />
      <br />

      <div className=" text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="/">
                Your Uploads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Bookmark
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">History</a>
            </li>

            <li className="nav-item">
              {/* search bar here */}
              <div className="input-group">
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                 
                </div>
                <button type="button" className="btn btn-primary">
                <i className="bi bi-search"></i>
                {/* logo in button isnt visisble  */}
                </button>
              </div>
            </li>
          </ul>
        </div>


        <div id="UserContentData">
          <VideoFeed />
        </div>
      </div>
    </>
  );
}
