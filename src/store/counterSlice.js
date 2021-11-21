import { createSlice } from '@reduxjs/toolkit';

const initialState= {counter: 0, counterShow: true};


const counterSlice  = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
        increment (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        increase (state,action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter (state) {
            state.counterShow = !state.counterShow;
        }
    }
});


export default counterSlice.reducer;

export const counterActions = counterSlice.actions;