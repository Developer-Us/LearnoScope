// import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
// import ApplicationModeState from '../Context/ApplicationMode/ApplicationModeState'
import '../Styles/App.css';
// import Navbar from './Navbar';
// import LeftBar from './LeftBar';
// import VideoFeed from './VideoFeed';
// import Login from './Login';
// import Signup from './Signup';
// import Upload from './Upload';
// import ForgetPass from './ForgetPass';
// import OTP from './OTP';
import VideoWatchSection from './VideoWatchSection';
// import SearchResult from './SearchResult';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
    {/* <SearchResult/> */}
    <VideoWatchSection/>

      {/* <Router>
        <LoggedInStatusState>
          <ApplicationModeState>
            <div className='App'>
              <Navbar />
              <LeftBar />
              <Switch>
                <Route exact path="/videoFeed">
                  <VideoFeed />
                </Route>
                <Route exact path="/">
                  <VideoFeed />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/upload">
                <Upload />
              </Route>
                <Route exact path="/forgetPass">
                  <ForgetPass />
                </Route>
                <Route exact path="/otp">
                  <OTP />
                </Route>
              </Switch>

            </div>
          </ApplicationModeState>
        </LoggedInStatusState>
      </Router> */}

    </>
  );
}

export default App;


