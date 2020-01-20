import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const DELETING_NOTE = 'DELETING_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const SUCCESS = 'SUCCESS';
export const SUCCESS_NOTE = 'SUCCESS_NOTE';
export const ERROR = 'ERROR';

export const getNotes = () => {
    const promise = axios.get("https://notes-for-you.herokuapp.com/api/notes/");
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const getNote = id => {
    const promise = axios.get(`https://notes-for-you.herokuapp.com/api/notes/${id}`)
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS_NOTE,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const addNote = note => {
    const promise = axios.post(`https://notes-for-you.herokuapp.com/api/notes`, note)
    return dispatch => {
        promise.then(response => {
            dispatch({
                type: ADDING_NOTE,
                payload: note
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const updateNote = note => {
    const promise = axios.put(`https://notes-for-you.herokuapp.com/api/notes/${note.id}`, note)
    return dispatch => {
        promise.then(response => {
            dispatch({
                type: UPDATING_NOTES,
                payload: note
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const deleteNote = noteID => {
    const promise = axios.delete(`https://notes-for-you.herokuapp.com/api/notes/${noteID}`)
    return dispatch => {
        promise.then(response => {
            dispatch({
                type: DELETING_NOTE,
                payload: noteID
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}