import { setLightTheme, setDarkTheme } from '../actions/themeActions'

const initialState = {
    theme: "light"
}

export const themeReducer = (state=initialState, action) => {
    switch(action.type){
        case setLightTheme: 
        return {
            ...state,
            theme: "light"
        }
        case setDarkTheme: 
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