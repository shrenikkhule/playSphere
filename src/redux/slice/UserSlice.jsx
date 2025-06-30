import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";



export const registerUser = createAsyncThunk("register/registerUser", async (userData, thunkAPI) => {
    try {
        const response = await axios.post("/api/users/register", userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
});
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/api/users/login", credentials);
            return response.data; // { user, token }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

const userSlice = createSlice({
    name: "auth",
    initialState: {
        registeredUser: null,
        loggedInUser: storedUser,
        token: storedToken,
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        logout: (state) => {
            state.loggedInUser = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.registeredUser = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ LOGIN HANDLERS
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedInUser = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

