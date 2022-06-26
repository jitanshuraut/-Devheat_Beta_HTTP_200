import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Analysi from './pages/Analysi';
import Sigin from './pages/Sigin';

function App() {
  return (<>
  <BrowserRouter>
  <Navbar/>
 
    <Routes>
    <Route path="/" element={<Sigin/>} />
    <Route path="/test" element={<Test/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/analytics" element={<Analysi/>} />
</Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
