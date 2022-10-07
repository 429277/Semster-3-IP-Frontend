import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Feat from './Feat';
import Sidebar from './Sidebar';
import './index.css';
import Searchbar from './Searchbar';
import Userlist from './Userlist';


function App() {

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div>
          <Searchbar />
          <Feat />
        </div>
        <Userlist />
      </div>

    </div>
  );
}

export default App;
