import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import One from './pages/One.js'
import Two from './pages/Two.js'
import Navbar from './components/Navbar.js'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/one' element={<One />} />
        <Route path='/two' element={<Two />} />
      </Routes>
    </div>
  );
}

export default App;
