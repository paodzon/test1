import axios from 'axios';

export const getSpecials = () =>{
    return async(dispatch) =>{
        const {data} = await axios.get('http://localhost:3001/specials')

        dispatch({
            type:'GET_SPECIALS',
            payload:data
        })
    }
}