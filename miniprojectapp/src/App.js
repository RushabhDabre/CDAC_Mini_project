
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import InnerNavbar from './Components/InnerNavbar';
import Register from './Components/Register';
import OuterNavbar from './Components/OuterNavbar';

function App() {
  return (
    <div>
      {/* <OuterNavbar/> */}
      {/* <InnerNavbar/> */}
     <Register/>
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
