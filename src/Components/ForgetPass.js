import React from 'react'

export default function ForgetPass() {
  return (
    <>

    {/*may be we have to link this page after the forget password  */}

<div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <div className="card p-2 text-center">
            <h6>Relax, we got you covered</h6>
          
            <div>
              <span> Provide us your Mail </span>
            </div>

            <span>

            <input
                className="m-2 text-center form-control rounded"
                type="email"
            />
            </span>
            


            <div className="mt-4">
              {" "}
              <button className="btn btn-danger px-4 validate">Validate</button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
