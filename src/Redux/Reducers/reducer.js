import { SIGN_UP,LOGIN,LOGOUT,FETCH_WEATHER,FETCH_WEATHER_LL,HISTORY,DEFAULT_CITY} from "../Actions/index";
const initialState={
    regData:{},
    weatherData:[],
    history:[],
    token: localStorage.getItem("token"),
    id:localStorage.getItem("id"),
    name:localStorage.getItem("name"),
    city:localStorage.getItem("city")
  }
export default function reducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                regData:{...state.regData,...action.payload},
                city:action.payload.city,
                }
        case LOGIN:
            return{
                ...state,
                regData:{...state.regData , ...action.payload},
                token:action.payload.token,
                id:action.payload.result._id,
                name:action.payload.name,
            }
        case LOGOUT:
            return{
                ...state,
                token:null,
                id:null,
                name:null
                    }
        case FETCH_WEATHER:
            return{
                ...state,
                weatherData:action.payload
            }
        case FETCH_WEATHER_LL:
            return{
                ...state,
                weatherData:action.payload,

            }
        case DEFAULT_CITY:{
            return{
                ...state,
                weatherData:action.payload
            }
        }
        case HISTORY:
            return{
                ...state,
                history:action.payload
            }
        
        default :
            return state
    }
}
