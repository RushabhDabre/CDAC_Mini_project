
import {Route,Routes} from 'react-router-dom';
import Register from './Components/Register';
import UserLogin from './Components/UserLogin'
import InnerHome from './Components/InnerHome';
import OutterHome from './Components/OutterHome';

function App() {
  return (
    <div>
      <OutterHome/>
          
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/home" element={<InnerHome/>}/>
      </Routes>

    </div>
  );
}

export default App;
