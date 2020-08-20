import {CHANGE_SEARCH_FIELD, 
    REQUEST_AUTOBOTS_PENDING,
    REQUEST_AUTOBOTS_SUCCESS,
    REQUEST_AUTOBOTS_FAILED 
} from './contsants'

export const setSearchField = (text) => ({
    type : 'CHANGE_SEARCH_FIELD',  
    payload : text
})

export const requestAutobots = () => (dispatch) => {
    dispatch({type: REQUEST_AUTOBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_AUTOBOTS_SUCCESS, payload:data}))
    .catch(error => dispatch({type: REQUEST_AUTOBOTS_FAILED, payload:error}))

}