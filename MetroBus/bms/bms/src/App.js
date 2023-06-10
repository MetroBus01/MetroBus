import './App.css';
import User from './Screens/User';
import Login from './Screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Aboutus from './Screens/Aboutus';
import Contactus from './Screens/Contactus';
import { Driver } from './Screens/Driver';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<User/>} />
          <Route exact path="/Login" element={<Login/>} />
          
          <Route exact path="/Driver" element={<Driver/>} />
         
          <Route exact path="/Contactus" element={<Contactus/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
