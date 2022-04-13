import React from 'react'
import { useState } from 'react';

export default function Upload() {
    /*State Variable Declaration Section*/
    const [filePath, setFilePath] = useState(" ");
    const [mail, setMail] = useState();
    const getFile = () => {
        try {
            var input = document.getElementById('SelectFile');
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function (e) {
                var vd = document.getElementById('Ved_1');
                var source = document.createElement('source');
                source.setAttribute('src', e.target.result);
                setFilePath(e.target.result);
                source.setAttribute('type', 'video/mp4');
                vd.appendChild(source);
                vd.play();
            }
            console.log(filePath);
            document.getElementById('in1').style.display = 'none';
            document.getElementById('in2').style.display = 'block';
            document.getElementById('in3').style.display = 'none';

        }
        catch (err) {
            alert("Please select a file");
        }

    }
    const chgMail = (e) => {
        setMail(e.target.value);
    }
    const getFile1 = () => {
        document.getElementById('in1').style.display = 'none';
        document.getElementById('in2').style.display = 'none';
        document.getElementById('in3').style.display = 'block';
    }
    return (
        <form id="FormForUpload" method="POST" encType='multipart/form-data' action=" https://developerus.herokuapp.com/uploadVideo/" onSubmit={(e) => {
            // e.preventDefault();
            if (document.getElementById('thumnail').value.length === 0)
                alert("Thumnail can't be empty :( ");
            else if (document.getElementById('keyword').value.length === 0)
                alert("Keyword can't be empty :( ");
            else
                alert("Vedio uplading get started");
        }}>
            <div id="FormElementContainer0" className='d-flex'  >

                <div id="in1" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", flexDirection: "column" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="upload_logo" width="140" height="140" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" />
                    </svg>
                    <input type="file" className="form-control" style={{ width: "300px" }} id="SelectFile" name="videoFile" />
                    <span id="btnContinue0" type="button" className="btn btn-primary my-5" onClick={getFile}>Continue</span>
                </div>

                <div id="in2" style={{ display: "none" }}>
                    <div className="card" >
                        <video id="Ved_1" style={{ width: "100vw", height: "75vh" }} controls>
                        </video>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter your video title" name=" videoTitle" />
                        </div>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="desc" className="form-label">Description</label>
                            <textarea className="form-control" id="desc" rows="8" placeholder="Enter description of video" name="videoDesc"></textarea>
                            <span id="btnContinue1" type="button" className="btn btn-primary my-5" onClick={getFile1}>Continue</span>
                        </div>
                    </div>
                </div>

                <div id="in3" style={{ display: "none", width: "100vw", height: "75vh" }} >
                    <div className="card" style={{ width: "100vw", height: "100vh" }}>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={mail} name=" email" onChange={chgMail} />
                        </div>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="keyword" className="form-label">Keywords</label>
                            <input type="text" className="form-control" id="keyword" placeholder="Enter keywords" name="keywords" />
                        </div>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="thumnail" className="form-label">Select the Thumnail</label>
                            <input type="file" id="thumnail" className="form-control" name=" thumbnail" />
                        </div>
                        <div className="mb-3" style={{ marginTop: "20px", width: "98%", paddingLeft: "20px" }}>
                            <label htmlFor="notes" className="form-label">Select the note file</label>
                            <input type="file" id="notes" className="form-control" name="notesFile" />
                            <button id="uploadbtn" type="submit" className="btn btn-primary my-5" >Upload</button>
                        </div>
                    </div>
                </div>

            </div>
        </form>

    )
}
