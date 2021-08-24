import { SIGN_UP,LOGIN,LOGOUT } from "../Actions/index";
const initialState={
    regData:{},
    token: localStorage.getItem("token"),
    id:localStorage.getItem("id"),
}
export default function reducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                regData:{...state.regData,...action.payload},
                token:action.payload.token,
                id:action.payload.result._id
            }
        case LOGIN:
            return{
                ...state,
                regData:{...state.regData , ...action.payload},
                }
        case LOGOUT:
            return{
                ...state,
                token:null,
                id:null
        
                    }
        default :
        return state
    }
}
