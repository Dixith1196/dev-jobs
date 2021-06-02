import { setLightTheme, setDarkTheme, toggleTheme } from '../actions/themeActions'

const initialState = {
    theme: "light",
    toggle: false
}

export const themeReducer = (state=initialState, action) => {
    switch(action.type){
        case setLightTheme: 
        console.log("sets light in reducer----")
        return {
            ...state,
            theme: action.payload
        }
        case setDarkTheme: 
        console.log("sets dark in reducer----")
        return {
            ...state,
            theme: action.payload
        }
        case toggleTheme:
        return {
            ...state,
            toggle: action.payload
        }
        default: 
        return{
            theme: "light",
            toggle: false
        }
    }
}