import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authentication/auth'
import dateSlice from './date'
import chartSlice from './chart'

const store = configureStore({
  reducer: {
    auth: authSlice,
    date: dateSlice,
    chart: chartSlice,
  },
})

export default store
