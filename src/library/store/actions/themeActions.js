
const actionType = {
    setLightTheme: "SET_LIGHT_THEME",
    setDarkTheme: "SET_DARK_THEME",
    toggleTheme: "TOGGLE_THEME"
}

export const toggleTheme = (tog) => dispatch => {
    dispatch({
        type: toggleTheme,
        payload: tog
    })
}

export const setLightTheme = () => dispatch => {
    dispatch({
        type: setLightTheme,
        payload: "light"
      })
  } 

  export const setDarkTheme = () => dispatch => {
    dispatch({
        type: setDarkTheme,
        payload: "dark"
      })
  } 