import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `/api/`,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("accessToken");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),
});
