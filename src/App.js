import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/navbar/Navbar';
import Protected from './components/Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Protected Component = {Home} /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/service' element={ <Protected Component = {Service} /> } />
          <Route path='/contact' element={ <Protected Component = {Contact} /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
