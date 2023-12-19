
import {Link, Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div>
     
     <nav>
        <Link to="/home">HOME</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

     </nav>
     
     <h1>Appoint Booking Application</h1>
     
     <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
