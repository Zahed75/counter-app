import Swal from "sweetalert2";
import {EditTodo} from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";


export function TodoEditAlert(i, item) {
    Swal.fire({
        title: 'Are you sure?',
        input: 'text',
        inputValue: item,
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({index: 1, task: value}))
            }
        }

    })


}