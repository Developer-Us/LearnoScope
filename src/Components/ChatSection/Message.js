import React from 'react'

export default function Message(props) {
    return (
        <div className="card shadow-lg p-3 mb-3 bg-body rounded " style={{margin:"10px 5px", maxWidth: "400px", minWidth:"200px", display: "flex" }}>
  
          <span className='senderName' style={{fontWeight:"bold"}}>{props.senderName}</span>
            <span className = "timestampOfMessage"><small>Today at 10:30 pm</small></span>
            <hr />
            <div>

           Hey guys this is my first message ! I joined your group today only , so please guide me !
            </div>
        </div>
    )
}
