import React from 'react';
import { useEffect } from 'react';
import VideoCard from './VideoCard';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';


export default function VideoFeed(props) {
    const is_loggedin = useContext(LoggedInStatusContext);   

 useEffect(() => {
    if(localStorage.getItem("userEmail")!== null){
        is_loggedin.setLoggedin(true);
    }
 }, )
 

    return (
        <div>
            <div id="GreetingAlert" style={{ display: "none" }} className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong id="usernameForGreet"> </strong>&nbsp;Logged in Successfully :)
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
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
