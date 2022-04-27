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
          </ul>
        </div>


        <div id="UserContentData">
          <VideoFeed />
        </div>
      </div>
    </>
  );
}
