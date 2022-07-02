import Navbar from './Navbar';
import Home from './Home';
//import Index from './Index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;