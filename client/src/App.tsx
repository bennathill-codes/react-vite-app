import axios from 'axios';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Search from '../pages/Search';
import About from '../pages/About';
import Profile from '../pages/Profile';
import './App.css'

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
