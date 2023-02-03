import { createSlice } from '@reduxjs/toolkit';

const initial = {}

export const userSlice = createSlice({
	name: 'user',
	initialState: initial,
	reducers: {
		setUser: (action, state) => {
			return state.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;