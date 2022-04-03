import React from 'react'


//   bootstap code threw error, issue resolved 
//   after replacing style with styles


export default function SearchResultVideoContainer() {
  return (

    <>
    
    <div className="card mb-3 my-3">
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src="Images/VedioThumnail.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title text-start">video title </h5>
        <p className="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text text-start"><small className="text-muted">uploaded on  3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}
