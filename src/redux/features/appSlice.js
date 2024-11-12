import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  themeMode :"light"
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
    }

   
  },
})

// Action creators are generated for each case reducer function
export const { increment,toggleThemeMode} = appSlice.actions

export default appSlice.reducer