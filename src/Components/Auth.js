import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { authUser } from '../services/Authentication';
import '../Auth.css';
export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);

  console.log(user);
  
  
  const signUp = async () => {
    const userData = await authUser(email, password, type);
    setUser(userData);
    setEmail('');
    setPassword('');
  };
  
  if (user) {
    return <Redirect to="/todos" />;
  }

  return (
    <div className='auth-coontainer'>

      Email:<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>



      Password:<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
      <button onClick={signUp}>Submit</button>
    </div>
  );
}
