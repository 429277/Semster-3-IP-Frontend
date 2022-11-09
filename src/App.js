import './App.css';
import Sidebar from './Components/Forms/Sidebar';
import './index.css';
import Userlist from './Components/Forms/Userlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UploadImage from './Components/Forms/UploadImage';
import Profile from './Components/Forms/Profile';
import TestAccesTokken from './Components/Forms/TestAccesTokken';
import ReactDom from "react-dom";

function App() {

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Upload" element={<UploadImage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/TestAccesTokken" element={<TestAccesTokken />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
