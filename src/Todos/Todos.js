import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Components/context/UserContext';
import useTodo from '../Components/hooks/useTodo';
import { addTodo } from '../services/todos';
import './Todos.css';

export default function Todos() {
  const [inputText, setInputText] = useState('');
  const { user } = useContext(UserContext);
  const { todo, setTodo } = useTodo();
  
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
    
    
  const handleClick = async (item) => {
    try {
      const newTodo = await addTodo({ description : inputText, complete: false });
      setTodo((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? newTodo : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
    
  
    
  return (
    <div className='todos-container'>
          
      <input className='todo-input' type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
      <button className='todo-button' onClick={handleClick}>add todo</button>
          
      <div className='item-display'>{todo.map((todos) => (
        <div key={todos.id}>{todos.description}</div>
      ))}
      </div>


    </div>
  );
}

