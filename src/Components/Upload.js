import React from 'react'
import { useState } from 'react';

export default function Upload() {
    /*State Variable Declaration Section*/
    const [filePath, setFilePath] = useState(" ");
    /*Form Submit Main Logic */
    const inputChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: [e.target.value]
            }
        })
    }
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
            document.getElementById('in1').style.display='none';
            document.getElementById('in2').style.display='block';
            document.getElementById('in3').style.display='none';
   
        }
        catch (err) {
            alert("Please select a file");
        }

    }

    const getFile1 = () => {
        if(document.getElementById('title').value.length==0)
        {
           alert("Title can't be empty :(");
        }
        else if((document.getElementById('desc').value.length==0))
        {
            alert("Description can't be empty :(");
        }else if(document.getElementById('title').value.length==0 && document.getElementById('desc').value.length==0){
            alert("Fields can't be empty :(");
        }
        else{
        document.getElementById('in1').style.display='none';
        document.getElementById('in2').style.display='none';
        document.getElementById('in3').style.display='block';
        }
}
    return (
<form id="FormForUpload" onSubmit={(e)=>{
e.preventDefault();
if(document.getElementById('thumnail').value.length==0)
alert("Thumnail can't be empty :( ");
else if(document.getElementById('keyword').value.length==0)
alert("Keyword can't be empty :( ");
else
alert("Vedio uplading get started");
}}>
<div id="FormElementContainer0" className='d-flex'  >

<div id="in1" style={{display:"flex",justifyContent: "center", alignItems: "center",width:"100%",height: "100vh", flexDirection: "column" }}>
<svg xmlns="http://www.w3.org/2000/svg" id="upload_logo" width="140" height="140" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" />
</svg>
<input type="file" className="form-control" style={{ width: "300px" }} id="SelectFile" name="vedioFile" />
<span id="btnContinue0" type="button" className="btn btn-primary my-5" onClick={getFile}>Continue</span>
</div>

<div id="in2" style={{display:"none"}}>
<div class="card" >
<video id="Ved_1" style={{width:"100vw",height:"75vh"}} controls>
</video>
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
  <label for="title" class="form-label">Title</label>
  <input type="text" class="form-control" id="title" placeholder="Enter your video title"/>
</div>
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
  <label for="desc" class="form-label">Description</label>
  <textarea class="form-control" id="desc" rows="8" placeholder="Enter description of video"></textarea>
  <span id="btnContinue1" type="button" className="btn btn-primary my-5" onClick={getFile1}>Continue</span>
</div>
</div>
</div>

<div id="in3"style={{display:"none",width:"100vw",height:"75vh"}} >
<div class="card" style={{width:"100vw",height:"100vh"}}>
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" id="email" value={localStorage.getItem('userEmail')}/>
</div> 
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
  <label for="keyword" class="form-label">Keywords</label>
  <input type="text" class="form-control" id="keyword" placeholder="Enter keywords"/>
</div>   
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
<label for="thumnail" class="form-label">Select the Thumnail</label>
<input type="file" id="thumnail" className="form-control" name="thumnail" />
</div>  
<div class="mb-3" style={{marginTop:"20px",width:"98%",paddingLeft:"20px"}}>
<label for="notes" class="form-label">Select the note file</label>
<input type="file" id="notes" className="form-control" name="noteFile" />
<button id="uploadbtn" type="submit" className="btn btn-primary my-5" >Upload</button>
</div>   
</div>
</div>

</div>      
</form>

    )
}
