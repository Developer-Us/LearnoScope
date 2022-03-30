import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import '../Styles/App.css';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import VideoFeed from './VideoFeed';
// import Login from './Login';
// import Signup from './Signup';
// import Upload from './Upload';
// import ForgetPass from './ForgetPass';
// import OTP from './OTP';


function App() {
  return (
    <LoggedInStatusState>
      <div className='App'>
        <Navbar/>
        <LeftBar/>
        <VideoFeed/>
        {/* <Signup/> */}
        {/* <Login/> */}
        {/* <Upload/> */}
        {/* <ForgetPass /> */}
        {/* <OTP/> */}
      </div>
    </LoggedInStatusState>

  );
}

export default App;
