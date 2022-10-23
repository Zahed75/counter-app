import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice"
import TodorReducer from "../state/todo/todoSlice"


export default configureStore({

    reducer: {
        counter: counterReducer,
        todo: TodorReducer,

    }


})