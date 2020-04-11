export const initialTodoList = 
{arr: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now(),
    }
]}

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            console.log("this should be the new state", {item: action.payload, completed: false, id: Date.now()})
            return {...state, arr: [...state.arr, {item: action.payload, completed: false, id: Date.now()}]}
        default:
            return state;
    }
}