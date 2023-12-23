import InnerNavbar from './InnerNavbar'; 

export default function InnerHome({ handleLogout }){

return(<>
    <InnerNavbar handleLogout={handleLogout}/>
    
    <h1>This is Home page</h1>
    <h1>Welcome</h1>
    </>
 )
}