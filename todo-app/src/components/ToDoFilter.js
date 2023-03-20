import { useRef } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../recoil_state";

export default function ToDoFilter(){
    let [filter, setFilter]=useRecoilState(filterState);
    const leftRef=useRef(null);
    const rightRef=useRef(null);

    const updateFilterL=(value) => {
        setFilter([value, filter[1]]);
        //console.log(value)
    };
    const updateFilterR=(value) => {
        setFilter([filter[0], value]);
    };
    const updateFilter=(() => {
        if ((leftRef.current.value && !Date.parse(leftRef.current.value)) || (rightRef.current.value && !Date.parse(rightRef.current.value))){
            alert("Invalid Filter Date!");
        } else {
            if(leftRef.current.value){
                const leftDate = new Date(leftRef.current.value);
                updateFilterL(leftDate);
                leftRef.current.value = leftDate.toDateString();
            } else {updateFilterL("")}
            if(rightRef.current.value){
                const rightDate = new Date(rightRef.current.value);
                updateFilterR(rightDate);
                rightRef.current.value = rightDate.toDateString();
            } else {updateFilterR("")}
        }
        //console.log(filter)
    })

    return (
        <>
            Date Filter:
            <input type="text" placeholder="Start Date" ref={leftRef}/>
            ~
            <input type="text" placeholder="End Date" ref={rightRef}/>
            <button onClick={updateFilter}>Filter</button>
        </>
    )
}