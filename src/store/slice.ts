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
      state.loading = false; // set loading to false when repos are fetched
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

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { HipoLogoIcon } from "../icons/HipoLogoIcon";
// import ErrorAlert from "../components/ErrorAlert";
// import axios from "axios";
// import { useGetReposQuery } from "../service";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, useAppSelector } from "@/store";
// import { setRepos } from "@/store/slice";

// interface Repo {
//   id: string;
//   html_url: string;
//   name: string;
// }

// export const HomePage = () => {
//   const hasError = true;
//   const [username, setUsername] = useState("");
//   const loading = useAppSelector((state) => state.repo.loading);
//   const { data, error, isLoading } = useGetReposQuery({ name: username });
//   const repos = useAppSelector((state) => state.repo.repos);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (!isLoading && !error && Array.isArray(data)) {
//       dispatch(setRepos(data));
//     }
//   }, [data, isLoading, error, dispatch]);
//   const repo = useAppSelector((state) => state.repo.repos);
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(e.target.value);
//   };

//   /**
//    *
// export const getRepos = (name: string) => async (dispatch: any) => {
//   dispatch(setLoading(true)); // set loading to true when repos are being fetched
//   const res = await fetch(`https://api.github.com/users/${name}/repos`);
//   const data = await res.json();
//   dispatch(setRepos(data));
// };

//    *
//    */

//   return (
//     <div className="outer-container">
//       <div className="inner-container">
//         <HipoLogoIcon />
//         <h1>Github Profile Explorer</h1>
//         <ul>
//           {repos?.map((repo) => (
//             <li key={repo.name}>
//               <a href={repo.html}>{repo.name}</a>
//             </li>
//           ))}
//         </ul>

//         <input type="text" placeholder="Type username" onChange={handleSearch} />
//       </div>
//       <div className="error-box mobile">
//         {hasError && (
//           <ErrorAlert message="Couldn't load the user profile. Please try again." />
//         )}
//       </div>
//     </div>
//   );
// };
