import "../../Styles/LandingInterface.css";

export default function LandingInterface() {
  return (
      <>
{/* Hero Section */}
<section id="hero" style={{background:'url("../../assets/img/hero-bg.jpg")', zIndex:"-2"}}>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 d-flex flex-column my-auto">
            <h1>An Educational Video Sharing Platform</h1>
            <h2>Makes Student-Teacher Interaction Easier</h2>
            <div className="text-center text-lg-start">
            <a href="/login" className="btn-get-started scrollto">Login</a>
          
          </div>
        </div>
        <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos-delay="300">
          <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g className="wave1">
        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
      </g>
      <g className="wave2">
        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
      </g>
    </svg> 
    </section>
  {/* End Hero */}
  
  <main id="main">
{/* Features Section */}
    <section id="features" className="features mx-5 d-flex">
      <div className="">

        <div className="section-title">
          <h2>Features</h2>
          <p>Check The Features</p>
        </div>

    <div className="w-100 d-flex justify-content-evenly">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos-delay="50">
              <i className="ri-video-line" style={{color: "#ffbb2c"}}></i>
              <h3><a href="/">Video Sharing</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos-delay="100">
              <i className="ri-group-line" style={{color: "#5578ff"}}></i>
              <h3><a href="/">Discussion Forum</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos-delay="150">
              <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
              <h3><a href="/">Notes Sharing</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos-delay="200">
              <i className="ri-book-line" style={{color: "#e361ff"}}></i>
              <h3><a href="/">Quick Notes</a></h3>
            </div>
          </div>
        </div>
        </div>

      </div>
    </section>
    {/* End Features Section */}

    </main>

</>
  )
}
