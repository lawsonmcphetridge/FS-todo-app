import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);



  return (
    <div>

      UserName:<input></input>



      Password:<input></input>

    </div>
  );
}
