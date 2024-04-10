import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Match } from '../../../types/match';
import { getMatches } from '../../../services/MatchServices';

export const getMatchesThunk = createAsyncThunk('/matches/getMatches', async () => {
  const data = await getMatches(); 
  console.log(data);
  return data;
});

type MatchesState = {
  status: 'loading' | 'idle';
  error: string | null;
  matches: Match[];
};

const initialState: MatchesState = {
  matches: [],
  error: null,
  status: 'idle',
};

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMatchesThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(getMatchesThunk.fulfilled, (state, action) => {
      state.matches = action.payload;
      state.status = 'idle';
    });

    builder.addCase(getMatchesThunk.rejected, (state, action) => {
      if (action.payload) {
        state.error = 'Could not retrieve matches';
      }
      state.status = 'idle';
    });
  },
});

export const { setMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
