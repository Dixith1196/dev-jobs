import { setLightTheme, setDarkTheme, toggleTheme } from '../actions/themeActions'

const initialState = {
    theme: "light",
    toggle: false
}

export const themeReducer = (state=initialState, action) => {
    switch(action.type){
        case setLightTheme: 
        return {
            ...state,
            theme: action.payload
        }
        case setDarkTheme: 
        return {
            ...state,
            theme: action.payload
        }
        case toggleTheme:
        if(action.payload === false){
            return {
                ...state,
                theme: "light",
                toggle: action.payload
            }
        }else{
            return {
                ...state,
                theme: "dark",
                toggle: action.payload
            }
        }
      
        default: 
        return{
            theme: "light",
            toggle: false
        }
    }
}