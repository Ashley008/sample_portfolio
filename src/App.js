import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';
import Technologies from './components/Technologies.js';
import Dashboard from './components/Dashboard.js';

import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    
    <Dashboard name="Name" post="Full Stack Developer" usp="Turning Ideas Into Interactive Reality"/>
    <Technologies id="technologies"/>
    <Projects id="projects"/>
    </>
  );
}

export default App;
