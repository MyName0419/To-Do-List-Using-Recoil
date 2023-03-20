import { useRef } from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "../recoil_state";

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
  
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function ToDoEditor(todo){
    const idRef = useRef(null);
    const todoRef = useRef(null);
    const dateRef = useRef(null);
    const [toDoList, setToDoList] = useRecoilState(toDoListState);
    const idx = toDoList.findIndex((item) => item === todo.todo);
    console.log(idx)

    let newId = todo.todo.id;
    let newTodo = todo.todo.text;
    let newDate = todo.todo.date;

    //idRef.current.value=todo.todo.id;
    //todoRef.current.value=todo.todo.text;
    //dateRef.current.value=todo.todo.date.toDateString();

    const edit =() => {
        if(idRef.current.value && isNaN(idRef.current.value)){
            alert("ID must be a number!");
        } else if(dateRef.current.value && !Date.parse(dateRef.current.value)){
            alert("Invalide Date!");
        } else{
            if(idRef.current.value){
                newId = Number(idRef.current.value)
            }
            if(todoRef.current.value){
                newTodo = todoRef.current.value
            }
            if(dateRef.current.value){
                newDate = new Date(dateRef.current.value)
            }
            const newToDoList = replaceItemAtIndex(toDoList, idx, {
                id: newId,
                text: newTodo,
                date: newDate,
            });
            console.log(newToDoList)
            setToDoList(newToDoList);
        }
    }
    const deleteTodo = () => {
        const newToDoList = removeItemAtIndex(toDoList, idx);
        setToDoList(newToDoList);
    }

    return(
        <div>
            <input type="text" placeholder="ID" ref={idRef} />
            <input type="text" placeholder="To-Do" ref={todoRef} />
            <input type="text" placeholder="Date" ref={dateRef} />
            <button onClick={edit}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}