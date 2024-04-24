import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from "../../Domain/redux/features/todoSlice";
import Button from '../../Components/Button/index.jsx';
import axios from "axios";

const CrudView = () => {
  const todos = useSelector(state => state.crud.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') return;
    dispatch(addTodo({
      id: todos.length + 1,
      activ: newTodo, 
      warn: '' 
    }));
    setNewTodo('');
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    // Implement update functionality here
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[800px]">
        <p className="text-[7vw] font-light">REACT JS REDUX</p>
        <div className="bg-slate-50 rounded-md ">
          <form onSubmit={handleSubmit}>
            <input
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Add new todo"
            />
            <button type="submit">Add Todo</button>
          </form>
          <div className="p-4 grid grid-cols-3 gap-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full h-[200px] rounded-md bg-white">
                <div className="flex items-center justify-center h-[50px] border-b-2">
                  <p>{todo.activ}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p>{todo.warn}</p>
                </div>
                <Button text="Update" handleClick={() => handleUpdate(todo.id)} />
                <Button text="Delete" handleClick={() => handleDelete(todo.id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudView;
