import ToDoFilter from "../components/ToDoFilter.js";
import ToDoCreator from "../components/ToDoCreator.js";
import { useRecoilValue } from "recoil";
import { filteredToDoListState } from "../recoil_state.js";
import ToDo from "../components/ToDo.js";



export default function Main(){
    const toDoList = useRecoilValue(filteredToDoListState);
    console.log(toDoList)
    return(
        <>
            <ToDoFilter />
            {toDoList.map((item) => (
                <ToDo todo={item} key={item.id} />
            ))}
            <ToDoCreator />
        </>
    )
}