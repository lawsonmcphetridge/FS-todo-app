import { useEffect } from 'react';
import { useState } from 'react';
import { getAllTodos } from '../../services/todos';

export default function useTodo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getAllTodos();
        setTodo(data);
      } catch (e) {
          // eslint-disable-next-line no-console
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return { todo, setTodo };
}
