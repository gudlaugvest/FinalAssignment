import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { fetchWithCredentials } from "../../../utilities/fetch-utilites";

export const getUser = createAsyncThunk("user/getUser", async () => {
    const response = await fetchWithCredentials("/user/info");
    const data = await response.json();
    return data;
});

type UserState = {
    status: "loading" | "idle";
    error: string | null;
    user: User | null;
};

const initialState: UserState = {
    user: null,
    error: null,
    status: "idle",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "idle";
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.error = action.error.message || "Failed to fetch user data";
            state.status = "idle";
        });
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
