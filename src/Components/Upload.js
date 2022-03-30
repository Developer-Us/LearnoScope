import React from 'react'
import { useState } from 'react';

export default function Upload() {
    /*State Variable Declaration Section*/
    const [noOfFile, setNoOfFile] = useState(0);
    const [filePath, setFilePath] = useState(" ");
    const [addFile, setAddFile] = useState([]);
    const [formData, setFormData] = useState({
        vedioFile: "",
        title: "",
        descript: "",
        Keywords: "",
        ThumnailName: "",
        NoteFile: ""
    });

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
                //vd.play();
                document.getElementById('FormElementContainer0').className = "block_Win";
                document.getElementById('FormElementContainer1').style.display = "flex";
            }
        }
        catch (err) {
            alert("Please select a file");
        }
        console.log(filePath);
    }

    const getFile1 = () => {
        if (formData.Keywords === "" && formData.title === "" && formData.descript === "") {
            document.getElementById('TitleContainer').className = "ErrorMsgEffect";
            document.getElementById('DescContainer').className = "ErrorMsgEffect";
            document.getElementById('KeyContainer').className = "ErrorMsgEffect";
        }
        else if (formData.Keywords === "")
            document.getElementById('KeyContainer').className = "ErrorMsgEffect";
        else if (formData.title === "")
            document.getElementById('TitleContainer').className = "ErrorMsgEffect";
        else if (formData.descript === "")
            document.getElementById('DescContainer').className = "ErrorMsgEffect";
        else {
            document.getElementById('FormElementContainer1').style.display = 'none';
            document.getElementById('FormElementContainer2').style.display = "flex";
        }
    }
    return (
        <form id="FormForUpload">
            <div id="FormElementContainer0" className='d-flex' style={{ justifyContent: "center", alignItems: "center", height: "80vh", flexDirection: "column" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" />
                </svg>
                <input type="file" className="form-control" style={{width:"300px"}} id="SelectFile" name="vedioFile" onChange={inputChange} value={formData.vedioFile} />
                <span  id="btnContinue" type="button" className="btn btn-primary my-5" onClick={getFile}>Continue</span>
            </div>

            {/* <div id="FormElementContainer1">
                <video id="Ved_1" width="320" height="240" controls>
                </video>
                <div id="TitleContainer" className="FormElement" >
                    <label htmlFor="title" className="LabelForInputs"><b >Title</b>(Title should be appropriate to the content )</label>
                    <input type="text" id="title" className="InputProperty" name="title" onChange={inputChange} value={formData.title} />
                </div>
                <div id="DescContainer" className="FormElement" >
                    <label htmlFor="Description" className="LabelForInputs"><b>Description</b></label>
                    <textarea type="text" id="Description" className="InputProperty" name="descript" rows="50" cols="50" onChange={inputChange} value={formData.descripts} />
                </div>
                <div id="KeyContainer" className="FormElement" >
                    <label htmlFor="Keywords" className="LabelForInputs"><b >Keywords</b></label>
                    <input type="text" id="keywords" className="InputProperty" name="Keywords" onChange={inputChange} value={formData.Keywords
                    } />
                </div>
                <div className="CenterContinueBtn">
                    <span id="btnContinue" onClick={getFile1}><b className="B_TagForLabel">Continue</b></span>
                </div>
            </div> */}

        </form>

    )
}
