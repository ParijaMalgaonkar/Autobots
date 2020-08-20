import {CHANGE_SEARCH_FIELD} from './contsants' 

const initialState = {
    searchField: ''
}

export const searchAutobots = (state=initialState,action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({},satte,{searchField:action.payload});
        default:
            return state;
    }
} 