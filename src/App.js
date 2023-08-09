import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <br /><br />
      <div id="container-div" className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <br />
      <Footer />
    </Router>
    );
}

export default App;
