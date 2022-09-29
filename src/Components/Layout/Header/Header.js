import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../../services/Authentication';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      <h1>Welcome to todos!</h1>
      {!user && (
        <>
          <div>
            <Link to="/auth/sign-in"><h1>Sign in</h1></Link>
            
            <Link to="/auth/sign-up"><h1>Sign up</h1></Link>
                                 
          </div>         
        </>


      )}
      {user && (
        <>
          <h1>Hello user!</h1>  
          <Link onClick={handleLogOut} to="/auth/sign-in">Log out!</Link>        
        </>
      )}
          
    </>
  );
}
