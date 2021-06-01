
const actionType = {
    setLightTheme: "SET_LIGHT_THEME",
    setDarkTheme: "SET_DARK_THEME"
}

export const setLightTheme = () => dispatch => {
    console.log("light calls------")
    dispatch({
        type: setLightTheme,
        payload: "light"
      })
  } 

  export const setDarkTheme = () => dispatch => {
    console.log("dark calls------")
    dispatch({
        type: setLightTheme,
        payload: "dark"
      })
  } 