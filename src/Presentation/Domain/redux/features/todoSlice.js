import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'crud',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state, action) =>{
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
          },
       
        updateTodo: (state, action)=>{
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            if(index !== -1){
                state.todos[index] = action.payload
            }
        }
    }
});

export const {addTodo, deleteTodo, updateTodo} =todoSlice.actions;
export default todoSlice.reducer