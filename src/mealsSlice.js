import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
    name: 'meals',
    initialState: [
        { name: 'Breakfast', cost: 50, selected: false },
        { name: 'High Tea', cost: 25, selected: false },
        { name: 'Lunch', cost: 65, selected: false },
        { name: 'Dinner', cost: 70, selected: false },
    ],
    reducers: {
        toggleMealSelection: (state, action) => {
            const index = action.payload;
                if (index >= 0 && index < state.length) {
                    state[index].selected = !state[index].selected;
                }
        },
    },
});
export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;