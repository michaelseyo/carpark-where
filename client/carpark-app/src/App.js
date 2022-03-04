import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './pages/Home';

function App() {
  const getAvailability = async () => {
    const res = await fetch('/api/availability');
    const json = await res.json();
    console.log(json);
  }

  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
