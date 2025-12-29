import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  isAuthentication: false,
  name: '',
  type: '',
  profile: '',
}

const publicURL = process.env.PUBLIC_URL

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true
      state.name = '임시 이름'
      state.type = 'common'
      state.profile = `${publicURL}/assets/userProfile.jpeg`
    },
    logout(state) {
      state.isAuthentication = false
      state.name = ''
      state.type = ''
      state.profile = ''
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
