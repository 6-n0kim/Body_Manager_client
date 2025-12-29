import { createSlice } from '@reduxjs/toolkit'

const initialChartState = {
  radarData: [],
  etcInbody: {},
  lineData: [],
}

const chartSlice = createSlice({
  name: 'chart',
  initialState: initialChartState,
  reducers: {
    changeData(state, action) {
      state[action.payload.dataType] = action.payload.dataValue
    },
  },
})

export const chartActions = chartSlice.actions
export default chartSlice.reducer
