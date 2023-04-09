import { baseApi } from "../store/api";

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
