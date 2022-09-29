import React from 'react';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Components/context/UserContext';

export default function Todos() {
  const { user, setUser } = useContext(useContext);
    
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
    
  return (
    <div>
          
      <input></input>
      <button>add todo</button>
      <div></div>


    </div>
  );
}
