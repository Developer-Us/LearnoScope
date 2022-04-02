import { useState } from "react";
import ApplicationModeContext from "./ApplicationModeContext";


const ApplicationModeState = (props) => {
    const [mode, setMode] = useState("light");

    const state = {
        "setMode": setMode,
        "mode": mode
    }


    return (

        <ApplicationModeContext.Provider value={state}>
            {props.children}
        </ApplicationModeContext.Provider>
    )
}
export default ApplicationModeState;
