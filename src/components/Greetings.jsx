import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

function Greetings({isLoggedIn}) {
  
  {isLoggedIn === true 
    ? <LoggedIn /> 
    : <LoggedOut /> }

  return (
    <div>
     {greetings}
     </div>
  ); 
    
  
}

export default Greetings
