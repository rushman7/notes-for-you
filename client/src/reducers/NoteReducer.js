import {
    FETCHING_NOTES,
    UPDATING_NOTES,
    DELETING_NOTE,
    ADDING_NOTE,
    SUCCESS,
    SUCCESS_NOTE,
    ERROR,
} from '../actions';

const initialState = {
    notes: [],
    curr_note: [],
    fetchingNotes: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return {
                ...state, 
                fetchingNotes: true
            }
        case ADDING_NOTE:
            return {
                ...state, 
                notes: [...state.notes, action.payload]
            }
        case UPDATING_NOTES:
            return {
                ...state, 
                notes: [...state.notes.filter(note => note.id !== (action.payload.id)), action.payload]
            }
        case DELETING_NOTE:
            return {
                ...state, 
                notes: state.notes.filter(note => note.id !== parseInt(action.payload)),
            }
        case SUCCESS:
            return {
                ...state,
                notes: [...action.payload],
                fetchingNotes: false,
                error: null
            }
        case SUCCESS_NOTE:
            return {
                ...state,
                curr_note: action.payload,
                fetchingNotes: false,
                error: null
            }
        case ERROR:
            return {
                ...state,
                fetchingNotes: false,
                error: 'Error, NOTE running away...',
                }
        default:
            return state;
    }
} 