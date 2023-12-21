
import {Route,Routes} from 'react-router-dom';
import Register from './Components/Register';
import UserLogin from './Components/UserLogin'
import InnerHome from './Components/InnerHome';
import OuterNavbar from './Components/OuterNavbar';

function App() {
  return (
    <div>
      <OuterNavbar/>
      <h1>This is Home page</h1>
      <h1>Welcome</h1>
          
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/home" element={<InnerHome/>}/>
      </Routes>

    </div>
  );
}

export default App;
