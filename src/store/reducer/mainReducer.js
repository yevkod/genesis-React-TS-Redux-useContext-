export const initEvents = () => {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

//savedEventsReducer

const PUSH = "PUSH";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

const initialState = initEvents() || [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH:
            return [...state, action.payload];
        case UPDATE:
            return state.map((evt) =>
                evt.id === action.payload.id ? action.payload : evt
            );
        case DELETE:
            return state.filter((evt) => evt.id !== action.payload.id);
        default:
            throw new Error();
    }
}

export default reducer;

