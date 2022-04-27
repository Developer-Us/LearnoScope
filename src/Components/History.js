import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';
import UserDataContext from '../Context/UserData/UserDataContext';

export default function History() {
  const is_loggedin = useContext(LoggedInStatusContext);
  const userData = useContext(UserDataContext);

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      is_loggedin.setLoggedin(true);
  }
    if (is_loggedin.loggedin === true) {
      getHistoryData(); // for getting Bookmark Data
    }
  })

  async function getHistoryData() {
    let userObject = {
      "email": localStorage.getItem('userEmail')
    }
    await fetch(`${userData.backendApi}/getUserHistory/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    }).then(response => response.json()).then((data) => {
      if (data.status === 200) {
        if (data.response.length !== 0) {
          document.getElementById("Bookmarks").innerHTML = `
          <div class="my-4 ms-l-5">
          <div class="text-center fs-2 mb-2">
            📑Your History
          </div>
  
  
        </div>
  
        <div class="row row-cols-1 row-cols-md-4 g-4 p-3 m-3">
  
        </div>
           `;
          console.log(data);

        }

        else {
          console.log(data);
        }
      }
      else {
        console.log(data);
      }
    }, []);
  }
  return (
    <div id="Bookmarks">
      <div className="my-4 text-center fs-2 mb-2">
      🧑‍💻 You Haven't watched any video yet !
      </div>
    </div>
  );
}
