import { setLightTheme, setDarkTheme } from '../actions/themeActions'

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
            theme: "light"
        }
        case setDarkTheme: 
        console.log("sets dark in reducer----")
        return {
            ...state,
            theme: "dark"
        }
        default: 
        return{
            theme: "light"
        }
    }
}