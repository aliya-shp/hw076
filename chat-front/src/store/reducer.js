import {
    CREATE_MESSAGE_FAILURE,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS, FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, UPDATE_AUTHOR, UPDATE_MESSAGE
} from "./actions";

const initialState = {
    messages: [],
    message: {
        message: '',
        author: '',
    },
    error: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MESSAGE_REQUEST:
            return {
                ...state
            };
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                message: {
                    ...state.message,
                    message: action.message,
                }
            };
        case CREATE_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case FETCH_MESSAGES_REQUEST:
            return {
                ...state
            };
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages,
            };
        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                message: {
                    ...state.message,
                    message: action.message,
                }
            };
        case UPDATE_AUTHOR:
            return {
                ...state,
                message: {
                    ...state.message,
                    author: action.author,
                }
            };
        default:
            return state;
    }
};

export default reducer;