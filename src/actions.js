import {CHANGE_SEARCH_FIELD} from './contsants'

export const setSearchField = (text) => ({
    type : 'CHANGE_SEARCH_FIELD',  
    payload : text

})