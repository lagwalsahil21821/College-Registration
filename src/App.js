import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {Home} from './pages/Home.tsx';
import {Academic} from './pages/Academic.tsx';
import {Hostel} from './pages/Hostel.tsx';
import {Noc} from './pages/Noc.tsx';
import Login from './component/LoginComponent.js';
import SignUp from './component/SignupComponent.js';
import UserDetails from './component/userDetails.js';
import { Dashboard } from './pages/Dashboard.tsx';
import { Header } from './component/Header.tsx';
import { Bachelor } from './pages/Bachelor.tsx';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path = "/" element = {isLoggedIn ? <UserDetails />: <Login />} />
          <Route path = "/sign-in" element = {<Login />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "/registration" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/academic" element = {<Academic />} />
          <Route path = "/hostel" element = {<Hostel />} />
          <Route path = "/noc" element = {<Noc />} />
          <Route path = "/academic/bachelor" element = {<Bachelor />} />
          <Route path = "*" element = {<div style = {{color: 'red'}}>Please enter a valid URL!!!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
