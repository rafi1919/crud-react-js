import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import todoReducer from '../features/todoSlice'
import authReducer from '../auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: todoReducer,
    auth: authReducer
  },
})

export default store;
