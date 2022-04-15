import React from 'react';
import '../Styles/ProfileCard.css';

export default function ProfileCard() {
  return (
    <>

    <div id="ProfilePic" className="">
      <img src="Images/demo.jpg" width="100" height="100" style={{marginLeft:"36px" , borderRadius:"50px" }} />
       <div id="name" style={{marginTop:"100px", marginLeft:"20px"   }}> 
       <h1 >Tony Stark</h1>

       {/* tried to take description here but didnt worked accordingly
          profile pic and display title mis-aligned 
          to check issue uncomment  code below */}

        {/* <p>Genius Billinior Playboy</p> */}
       
       
       </div>
     
    </div>

   


    </>
  )
}
