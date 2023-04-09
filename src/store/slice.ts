import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  repos: Repo[];
  loading: boolean;
  user: User;
}

const initialState: InitialState = {
  repos: [],
  loading: false,
  user: {} as User,
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<Repo[]>) => {
      state.repos = action.payload;
      state.loading = false;
    },
    setUser: (state: { user: User }, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLoading: (state: { loading: boolean }, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setRepos, setLoading, setUser } = repoSlice.actions;
export const repoReducer = repoSlice.reducer;
