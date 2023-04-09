import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Repo {
  id: string;
  full_name: string;
  html_url: string;
  name: string;
  stargazers_count: number;
  description: string;
  owner: {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
  };
}

interface User {
  name: string;
  avatar_url: string;
  following: number;
  followers: number;
  public_repos: number;
  html_url: string;
  login: string;
}

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
