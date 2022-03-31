import { useState } from "react";
import LoggedInStatusContext from "./LoggedInStatusContext";


const LoggedInStatusState = (props) => {
    const [loggedin, setLoggedin] = useState(false);
 
    const state= {
        "setLoggedin":setLoggedin,
        "loggedin":loggedin
}


    return (

        <LoggedInStatusContext.Provider value={state}>
            {props.children}
        </LoggedInStatusContext.Provider>
    )
}
export default LoggedInStatusState;
