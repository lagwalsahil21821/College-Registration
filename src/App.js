import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {Home} from './pages/Home.tsx';
import {Academic} from './pages/Academic.tsx';
import {Hostel} from './pages/Hostel.tsx';
import {Noc} from './pages/Noc.tsx';
import {Login} from './pages/Login.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { Header } from './component/Header.tsx';
import { Bachelor } from './pages/Bachelor.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/academic" element = {<Academic />} />
          <Route path = "/hostel" element = {<Hostel />} />
          <Route path = "/noc" element = {<Noc />} />
          <Route path = "/academic/bachelor" element = {<Bachelor />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "*" element = {<div style = {{color: 'red'}}>Please enter a valid URL!!!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
