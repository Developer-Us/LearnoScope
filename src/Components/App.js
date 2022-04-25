import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import ApplicationModeState from '../Context/ApplicationMode/ApplicationModeState';
import UserDataState from '../Context/UserData/UserDataState';
import '../Styles/App.css';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import VideoFeed from './VideoFeed';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import ForgetPass from './ForgetPass';
import OTP from './OTP';
import VideoWatchSection from './VideoWatchSection';
import ChatInterface from './ChatSection/ChatInterface';
import JoinRoom from './ChatSection/JoinRoom';
import CreateRoom from './ChatSection/CreateRoom';
import Chatting from './ChatSection/Chatting';
import UserProfile from '../Components/UserProfile';
import Bookmark from './Bookmark';
import YourVideoSection from './YourVideoSection';
import History from './History';
// import Vedionote from './Vedionote';
//import SearchResult from './SearchResult';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
    {/* <Vedionote/> */}
      <Router>
        <LoggedInStatusState>
          <UserDataState>
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
                  <Route exact path="/videoWatchSection">
                    <VideoWatchSection />
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
                  <Route exact path="/chatInterface">
                    <ChatInterface />
                  </Route>
                  <Route exact path="/joinRoom">
                    <JoinRoom />
                  </Route>
                  <Route exact path="/createRoom">
                    <CreateRoom />
                  </Route>
                  <Route exact path="/chatting">
                    <Chatting />
                  </Route>
                  <Route exact path="/userProfile">
                    <UserProfile/>
                  </Route>
                  <Route exact path="/bookmark">
                    <Bookmark/>
                  </Route>
                  <Route exact path="/yourVideos">
                    <YourVideoSection/>
                  </Route>
                  <Route exact path="/history">
                    <History/>
                  </Route>
                </Switch>
              </div>
            </ApplicationModeState>
          </UserDataState>
        </LoggedInStatusState>
      </Router>

    </>
  );
}

export default App;


