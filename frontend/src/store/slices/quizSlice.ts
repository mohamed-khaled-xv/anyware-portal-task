import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Quiz {
  _id: string;
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

interface QuizState {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchQuizzes = createAsyncThunk(
  'quizzes/fetchAll',
  async () => {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  }
);

export const createQuiz = createAsyncThunk(
  'quizzes/create',
  async (quiz: Omit<Quiz, '_id' | 'createdAt' | 'updatedAt'>) => {
    const response = await axios.post(`${API_URL}/quizzes`, quiz);
    return response.data;
  }
);

export const updateQuiz = createAsyncThunk(
  'quizzes/update',
  async ({ id, data }: { id: string; data: Partial<Quiz> }) => {
    const response = await axios.put(`${API_URL}/quizzes/${id}`, data);
    return response.data;
  }
);

export const deleteQuiz = createAsyncThunk(
  'quizzes/delete',
  async (id: string) => {
    await axios.delete(`${API_URL}/quizzes/${id}`);
    return id;
  }
);

const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch quizzes';
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.quizzes.push(action.payload);
      })
      .addCase(updateQuiz.fulfilled, (state, action) => {
        const index = state.quizzes.findIndex(q => q._id === action.payload._id);
        if (index !== -1) {
          state.quizzes[index] = action.payload;
        }
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizzes = state.quizzes.filter(q => q._id !== action.payload);
      });
  },
});

export default quizSlice.reducer;
