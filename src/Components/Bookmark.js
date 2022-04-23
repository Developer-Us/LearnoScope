import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';

export default function Bookmark() {
  const is_loggedin = useContext(LoggedInStatusContext);

  useEffect(() => {
    if (is_loggedin.loggedin === true) {
      getBookmarkData(); // for getting Bookmark Data
    }
  })

  async function getBookmarkData() {
    let userObject = {
      "email": localStorage.getItem('userEmail')
    }
    await fetch('https://developerus.herokuapp.com/getUserBookmark/', {
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
            📑Your Bookmark's
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
        📑You dont have any bookmarks yet !
      </div>
    </div>
  );
}
