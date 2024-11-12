import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  themeMode: "light",
  systemLang:"en"
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
      changeSystemLang: (state,action) => {
        state.systemLang = action.payload.systemLang,
        state.langDirection =action.payload.langDirection
  }
   
  },
})

// Action creators are generated for each case reducer function
export const { increment,toggleThemeMode,changeSystemLang} = appSlice.actions

export default appSlice.reducer