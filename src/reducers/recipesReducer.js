const recipesReducer = (state={}, action) =>{
    switch(action.type){
        case 'GET_RECIPES':
            return {...state, recipesData: action.payload}
        default:
            return state
    }   
}

export default recipesReducer;