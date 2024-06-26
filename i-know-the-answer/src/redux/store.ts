import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user-slice";
import matchReducer from "./features/match/match-slice";
import { match } from "assert";

export const store = configureStore({
    reducer: {
        user: userReducer,
        match: matchReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;