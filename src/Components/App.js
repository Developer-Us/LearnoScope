import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import ApplicationModeState from '../Context/ApplicationMode/ApplicationModeState'
import '../Styles/App.css';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import VideoFeed from './VideoFeed';
import Login from './Login';
import Signup from './Signup';
// import Upload from './Upload';
import ForgetPass from './ForgetPass';
import OTP from './OTP';
import Bookmark from './Bookmark';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      {/* arrange code propely before pushing it */}
      <Bookmark/>
    </>
  );
}

export default App;


