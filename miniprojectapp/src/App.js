
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import InnerNavbar from './Components/InnerNavbar';
import Register from './Components/Register';
import OuterNavbar from './Components/OuterNavbar';
import UpdatePass from './Components/UpdatePass';
import UserLogin from './Components/UserLogin'

function App() {
  return (
    <div>
      {/* <OuterNavbar/> */}
      {/* <InnerNavbar/> */}
     <Register/>
    {/* <Login/> */}
    {/* <UpdatePass/> */}
    {/* <UserLogin/> */}

          
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
