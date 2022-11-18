import { configureStore } from '@reduxjs/toolkit'
import translate from '../store/translate.Slice'

export default configureStore({
  reducer: {
    translate

	}
})