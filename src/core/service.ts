import { baseApi } from "../store/api";

interface Repo {
  id: string;
  name: string;
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

export const service = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRepos: build.query<Repo[], { name: string }>({
      query: ({ name }: Repo) => ({
        url: `https://api.github.com/users/${name}/repos`,
        method: "GET",
      }),
    }),
    // User repo değil
    getUser: build.query<User, { name: string }>({
      query: ({ name }: Repo) => ({
        url: `https://api.github.com/users/${name}`,
        method: "GET",
      }),
    }),
  }),
});

export default service;

export const { useGetReposQuery, useGetUserQuery } = service;
