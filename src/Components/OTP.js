import React from "react";
import "../Styles/OTP.css";

export default function OTP() {

  var mail = "amit@mail.com";
  // display user mail 

  document.addEventListener("DOMContentLoaded", function (event) {
    function OTPInput() {
      const inputs = document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    }
    OTPInput();
    // logical code to move cursor to forward input box in OTP section
  });

  return (
    <>
      <div className="Otp_Section container h-100 d-flex mx-auto my-auto">
          <div className="otp_card shadow-lg card p-2 text-center mx-auto">
            <h4 className="otp_head">Please enter the one time password to verify your account</h4>
            <span>A code has been sent to <span className="email_id">{mail}</span></span>
            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
              {/* inp m-2 text-center form-control rounded */}
              <input className="inp text-center form-control rounded" id="first" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              <input className="inp text-center form-control rounded" id="second" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              <input className="inp text-center form-control rounded" id="third" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              <input className="inp text-center form-control rounded" id="fourth" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              <input className="inp text-center form-control rounded" id="fifth" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              <input className="inp text-center form-control rounded" id="sixth" type="text" maxlength="1" max="9" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
              {" "}
            </div>

            <div className="mt-4">
              {" "}
              <button className="btn px-4 validate">Validate</button>
            </div>
          </div>
      </div>
    </>
  );
}
