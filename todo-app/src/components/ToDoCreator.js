import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { toDoListState } from "../recoil_state.js"

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
  
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function ToDoCreator(){
    const idRef = useRef(null);
    const todoRef = useRef(null);
    const dateRef = useRef(null);
    const setToDoList = useSetRecoilState(toDoListState);

    const create =() => {
        if(idRef.current.value=="" || todoRef.current.value=="" || dateRef.current.value==""){
            alert("All fields required!");
        } else if(isNaN(idRef.current.value)){
            alert("ID must be a number!");
        } else if(!Date.parse(dateRef.current.value)){
            alert("Invalide Date!");
        } else{
            setToDoList((current) => [
                ...current,
                {
                    id: Number(idRef.current.value),
                    text: todoRef.current.value,
                    date: new Date(dateRef.current.value),
                }
            ]);
            idRef.current.value="";
            todoRef.current.value="";
            dateRef.current.value="";
        }
    }

    return(
        <div>
            <input type="text" placeholder="ID" ref={idRef} />
            <input type="text" placeholder="To-Do" ref={todoRef} />
            <input type="text" placeholder="Date" ref={dateRef} />
            <button onClick={create}>Save</button>
        </div>
    )
}