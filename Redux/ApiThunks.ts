/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async (_, thunkAPI) => {
		try {
			const response = await api.get('/admin/getCourse');
			console.log('Courses API response:', response);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch courses');
		}
	}
);
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiClient';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ uniqueId, password }: { uniqueId: string; password: string }, thunkAPI) => {
		try {
			const response = await api.post('/admin/userlogin', { uniqueId, password });
			console.log('Login API response:', response);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
		}
	}
);
