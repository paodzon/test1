const specialsReducer = (state={}, action) =>{
    switch(action.type){
        case 'GET_SPECIALS':
            return{...state, specialsData: action.payload}
        case 'ADD_SPECIAL':
            return{...state, newSpecial: action.payload}
        default:
            return state
    }
}

export default specialsReducer