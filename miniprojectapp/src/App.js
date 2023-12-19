
// import {Link, Route,Routes} from 'react-router-dom';
// import Home from './Components/Home';
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Navbar/>
     <Register/>
     {/* <nav>
        <Link to="/home">HOME</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
     </nav> */}
     
     {/* <h1>Appoint Booking Application</h1> */}
     
     {/* <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>} />
    </Routes> */}
    </div>
  );
}

export default App;
