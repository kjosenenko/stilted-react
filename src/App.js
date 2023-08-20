import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Music from './components/Music'
import Shows from './components/Shows'
import Contact from './components/Contact'
import ContactResponse from './components/ContactResponse';

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <div id="container-div" className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/shows" element={<Shows/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/submitted" element={<ContactResponse/>}/>
        </Routes>
      </div>
      <br />
      <Footer />
    </Router>
    );
}

export default App;
