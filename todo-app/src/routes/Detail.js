import { useParams, Link } from "react-router-dom"
import { useRecoilValue } from "recoil";
import ToDoEditor from "../components/ToDoEditor";
import { toDoListState } from "../recoil_state";

export default function Detail(){
    const {id} = useParams();
    const toDoList = useRecoilValue(toDoListState);
    let ret = <div>Nothing</div>

    toDoList.map((item) => {
        if (item.id == id){
            ret = (
                <div>
                    <nav>
                        <Link to="/">Main</Link>
                    </nav>
                    <ToDoEditor todo={item} key={item.id} />
                </div>
            )
        } else {
            ret = (
                <div>
                    <nav>
                        <Link to="/">Main</Link>
                    </nav>
                    <h1>To-Do Not Found!</h1>
                </div>
            )
        }
    })

    return ret;
}