import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavScrollExample from './Navbar';
import Feat from './Feat';


function App() {
  
  return (
    <div className="App">
      <NavScrollExample/>
        <div className="content">
          <Feat/>
          <p>{Math.random() * 10}</p>
        </div>

    </div>
  );
}

export default App;
