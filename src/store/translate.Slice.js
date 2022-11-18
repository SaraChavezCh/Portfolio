import { createSlice } from '@reduxjs/toolkit';

export const translate = createSlice({
    name: 'translate',
    initialState: true,
    reducers: {
        toggleTranslate: (state, ) => {
            return !state
        }

    }
})

export const { toggleTranslate } = translate.actions;

export default translate.reducer;
