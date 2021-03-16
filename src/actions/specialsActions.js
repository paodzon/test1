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

export const addSpecial =(formvalues,i) =>{
    return async(dispatch,getState) =>{

        const {data} = await axios.post('http://localhost:3001/specials',{...formvalues});
        console.log(data)
        dispatch({
            type:'ADD_SPECIAL',
            payload:data
        })
    }
}