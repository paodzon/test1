import axios from 'axios';

export const getRecipes = () =>{
    return async (dispatch) =>{
        try{
            const {data} = await axios.get('http://localhost:3001/recipes')
            dispatch({
                type:'GET_RECIPES',
                payload:data
            })
        
        }catch(err){
            console.log(err)
        }
    } 
}