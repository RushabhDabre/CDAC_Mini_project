
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import InnerNavbar from './Components/InnerNavbar';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <InnerNavbar/>
     {/* <Register/> */}
    {/* <Login/> */}

          
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
