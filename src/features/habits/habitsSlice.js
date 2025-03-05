import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    habitsAdd(state, action) {
      state.push(action.payload);
    },
    habitsToggle(state, action) {
      const habit = state.find((h) => h.id === action.payload.id);
      if (habit) {
        habit.days[action.payload.day] = !habit.days[action.payload.day];
      }
    },
    habitsChangeName(state, action) {
      const habit = state.find((h) => h.id === action.payload.id);
      if (habit) {
        habit.text = action.payload.newText;
      }
    },
    habitsDelete(state, action) {
      return state.filter((habit) => habit.id !== action.payload.id);
    },
  },
});
export const { habitsAdd, habitsToggle, habitsChangeName, habitsDelete } = habitsSlice.actions;
export default habitsSlice.reducer;
