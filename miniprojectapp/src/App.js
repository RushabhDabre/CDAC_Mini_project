
// import {Link, Route,Routes} from 'react-router-dom';
// import Home from './Components/Home';
// import Login from './Components/Login';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Navbar/>
     
      {/* <nav>
=======
      {/* <Navbar/> */}
     <Register/>
     {/* <nav>
>>>>>>> 8625fcf94c33f21f56a9696c8e80df732e6a38a4
        <Link to="/home">HOME</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
     </nav>  */}
     
     {/* <h1>Appoint Booking Application</h1> */}
     
     {/* <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
    </Routes> */}
    <Login/>
    </div>
  );
}

export default App;
