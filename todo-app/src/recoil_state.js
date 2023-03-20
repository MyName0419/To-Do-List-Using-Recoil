import { atom, selector } from "recoil";

export const toDoListState = atom({
    key: "toDoListState",
    default: [],
})

export const filterState = atom({
    key: "filterState",
    default: ["",""],
})

export const filteredToDoListState = selector({
    key: "filteredToDoListState",
    get: ({get}) => {
        const filter = get(filterState);
        const list = get(toDoListState);

        if (filter[0]=="" && filter[1]==""){
            return list;
        } else if (filter[0]==""){
            return list.filter((item) => item.date<=filter[1]);
        } else if (filter[1]==""){
            return list.filter((item) => item.date>=filter[0]);
        } else {
            return list.filter((item) => item.date>=filter[0] || item.date<=filter[1]);
        }
    }
})
