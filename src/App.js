import './App.css';
import Sidebar from './Components/Forms/Sidebar';
import './index.css';
import Userlist from './Components/Forms/Userlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Components/Forms/Profile';
import TestMe from './TestMe';
import CreatePost from './Components/Forms/CreatePost';
import Feed from './Components/Forms/Feed';

function App() {

  return (
    <div className="App">
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Upload" element={<CreatePost />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/TestAccesTokken" element={<TestMe />} />
          <Route path="/MyPosts" element={<Feed ApiRoute="Post/GetMyPosts" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
