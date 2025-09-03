/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './ApiThunks';
import { fetchCourses } from './ApiThunks';


interface AuthState {
	loading: boolean;
	user: any;
	error: string | null;
}

interface CoursesState {
	loading: boolean;
	data: any;
	error: string | null;
}


const initialState: AuthState = {
	loading: false,
	user: null,
	error: null,
};

const initialCoursesState: CoursesState = {
	loading: false,
	data: null,
	error: null,
};


const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.user = null;
				state.error = action.payload as string;
			});
	},
});

const coursesSlice = createSlice({
	name: 'courses',
	initialState: initialCoursesState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCourses.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload.data;
				state.error = null;
			})
			.addCase(fetchCourses.rejected, (state, action) => {
				state.loading = false;
				state.data = null;
				state.error = action.payload as string;
			});
	},
});

export default authSlice.reducer;
export const coursesReducer = coursesSlice.reducer;
