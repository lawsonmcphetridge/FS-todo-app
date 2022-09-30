import { checkError, client } from './client';

export async function getAllTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function addTodo(newTodo) {
  const response = await client.from('todos').insert(newTodo);
  return checkError(response);
}