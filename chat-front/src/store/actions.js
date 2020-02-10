import axiosChatApi from "../axiosChatApi";

export const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export const createMessageRequest = () => ({type: CREATE_MESSAGE_REQUEST});
export const createMessageSuccess = (message) => ({type: CREATE_MESSAGE_SUCCESS, message});
export const createMessageFailure = (error) => ({type: CREATE_MESSAGE_FAILURE, error});

export const fetchMessagesRequest = () => ({type: FETCH_MESSAGES_REQUEST});
export const fetchMessagesSuccess = (messages) => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const fetchMessagesFailure = (error) => ({type: FETCH_MESSAGES_FAILURE, error});

export const updateMessage = (message) => ({type: UPDATE_MESSAGE, message});
export const updateAuthor = (author) => ({type: UPDATE_AUTHOR, author});

export const createMessage = (message) => {
    return async (dispatch) => {
        dispatch(createMessageRequest());

        try {
            const response = await axiosChatApi.post('/messages', message);
            dispatch(createMessageSuccess(response.data.message));
        } catch (e) {
            dispatch(createMessageFailure(e));
        }
    }
};

export const fetchMessages = () => {
    return async (dispatch) => {
        dispatch(fetchMessagesRequest());

        try {
            const response = await axiosChatApi.get('/messages');
            dispatch(fetchMessagesSuccess(response.data));
        } catch (e) {
            dispatch(fetchMessagesFailure(e));
        }
    }
};
