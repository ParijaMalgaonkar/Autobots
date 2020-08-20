import {CHANGE_SEARCH_FIELD,
    REQUEST_AUTOBOTS_PENDING,
    REQUEST_AUTOBOTS_SUCCESS,
    REQUEST_AUTOBOTS_FAILED 
} from './contsants' 

const initialStateSearch = {
    searchField: ''
}

export const searchAutobots = (state=initialStateSearch,action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
} 

const initialStateIdentity = {
    isPending: false,
    identity: [],
    error: ''
}

export const requestAutobots = (state=initialStateIdentity,action={}) => {
    switch(action.type) {
        case REQUEST_AUTOBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_AUTOBOTS_SUCCESS :
            return Object.assign({}, state, {identity: action.payload, isPending: false})
        case REQUEST_AUTOBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: 
            return state;
    }
} 