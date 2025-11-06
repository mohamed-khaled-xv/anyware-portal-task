import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Announcement {
  _id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface AnnouncementState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  announcements: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchAnnouncements = createAsyncThunk(
  'announcements/fetchAll',
  async () => {
    const response = await axios.get(`${API_URL}/announcements`);
    return response.data;
  }
);

export const createAnnouncement = createAsyncThunk(
  'announcements/create',
  async (announcement: Omit<Announcement, '_id' | 'createdAt' | 'updatedAt'>) => {
    const response = await axios.post(`${API_URL}/announcements`, announcement);
    return response.data;
  }
);

export const updateAnnouncement = createAsyncThunk(
  'announcements/update',
  async ({ id, data }: { id: string; data: Partial<Announcement> }) => {
    const response = await axios.put(`${API_URL}/announcements/${id}`, data);
    return response.data;
  }
);

export const deleteAnnouncement = createAsyncThunk(
  'announcements/delete',
  async (id: string) => {
    await axios.delete(`${API_URL}/announcements/${id}`);
    return id;
  }
);

const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch announcements';
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.announcements.unshift(action.payload);
      })
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        const index = state.announcements.findIndex(a => a._id === action.payload._id);
        if (index !== -1) {
          state.announcements[index] = action.payload;
        }
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.announcements = state.announcements.filter(a => a._id !== action.payload);
      });
  },
});

export default announcementSlice.reducer;
