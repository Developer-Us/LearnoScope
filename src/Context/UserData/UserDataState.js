import { useState } from "react";
import UserDataContext from "./UserDataContext";


const UserDataState = (props) => {
    const [userEmail, setUserEmail] = useState("");
    let [roomMessages,setRoomMessages]=useState({});
    // let [videoFeedData,setVideoFeedData]=useState([]);

    const state = {
        "setUserEmail": setUserEmail,
        "userEmail": userEmail,
        "roomMessages":roomMessages,
        "setRoomMessages":setRoomMessages,
        // "videoFeedData":videoFeedData,
        // "setVideoFeedData":setVideoFeedData
    }
    


    return (
        <UserDataContext.Provider value={state}>
            {props.children}
        </UserDataContext.Provider>
    )
}
export default UserDataState;
