import { React, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Register from './Components/Register';
import UserLogin from './Components/UserLogin'
import InnerHome from './Components/InnerHome';
import OutterHome from './Components/OutterHome';
import UpdatePass from './Components/UpdatePass';


function App() {
  const [isVisible, setVisible] = useState(true);
  
  const handleLogin = () => {
    setVisible(false);
  };


  return (
    <div>
      <Routes>
        <Route path="/" element={isVisible && <OutterHome />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<UserLogin onLoginSuccess={handleLogin}/>}/>
        <Route path="/home" element={<InnerHome isVisible={isVisible}/>}/>
        <Route path="/change" element={<UpdatePass/>}/>
        <Route path="/logout" element={<OutterHome/>}/>
      </Routes>
    </div>
  );
}

export default App;
