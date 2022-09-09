export const initEvents = () => {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}


const initialState = initEvents() || [];

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "push":
            return [...state, action.payload];
        case "update":
            return state.map((evt) =>
                evt.id === action.payload.id ? action.payload : evt
            );
        case "delete":
            return state.filter((evt) => evt.id !== action.payload.id);
        default:
            return state;
    }
}

export default mainReducer;

