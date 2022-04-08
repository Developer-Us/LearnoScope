import React from 'react'

export default function Spinner() {
    return (
        <div style={{width:"100%"}} className="my-auto">
            <div className="text-center" style={{ height: "10em", marginTop: "20px" }}>
                <img style={{ height: "12em" }} src="Spinner/lightMode.gif" alt="loading..." />
            </div>
        </div>

    )
}
