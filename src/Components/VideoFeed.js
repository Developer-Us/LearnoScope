import React from 'react';

import VideoCard from './VideoCard';
import { useEffect } from 'react';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';


export default function VideoFeed(props) {
    const is_loggedin = useContext(LoggedInStatusContext);

    
    useEffect(() => {

        if (is_loggedin.loggedin === true) {
            document.getElementById("GreetingAlert").style.display = "block";
        }
    })

    return (
        <>
            <div id="GreetingAlert" style={{ display: "none" }} className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong> Vedant!</strong>&nbsp;Welcome to Learnoscope :)
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
        </>


    )
}
