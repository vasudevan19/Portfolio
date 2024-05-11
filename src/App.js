// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Education from './Pages/Career/Education';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Navbar from './Pages/Navbar/Navbar';


function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route  path='/projects' element={<Projects/>}/>
          <Route  path='/contact' element={<Contact/>}/>
      </Routes>

    </Router>
      
    
    </>
  );
}

export default App;
