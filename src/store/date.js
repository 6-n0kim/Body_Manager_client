import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialDateState = { mainDate: moment(new Date()).format('YYYY-MM-DD') }

const dateSlice = createSlice({
  name: 'date',
  initialState: initialDateState,
  reducers: {
    pickMainDate(state, action) {
      state.mainDate = action.payload
    },
  },
})

export const dateActions = dateSlice.actions
export default dateSlice.reducer
