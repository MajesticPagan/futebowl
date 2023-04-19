import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const footballApi = createApi({
	reducerPath: "football",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://football98.p.rapidapi.com",
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPIDAPI_KEY );
			headers.set("X-RapidAPI-Host", "football98.p.rapidapi.com");
			return headers;
		}
	}),
	endpoints: (builder) => ({
		getCompetitions: builder.query({
			query: () => {
				return {
					url: "/competitions",
					method: "GET",
				};
			},
		}),
		getCompetitionTable: builder.query({
			query: (compId) => {
				return {
					url: `/${compId}/table`,
					method: "GET",
				};
			},
		}),
		getCompetitionResults: builder.query({
			query: (compId) => {
				return {
					url: `/${compId}/results`,
					method: "GET",
				};
			},
		}),
		getCompetitionFixtures: builder.query({
			query: (compId) => {
				return {
					url: `/${compId}/fixtures`,
					method: "GET",
				};
			},
		}),
		getCompetitionNews: builder.query({
			query: (compId) => {
				return {
					url: `/${compId}/news`,
					method: "GET",
				};
			},
		}),
		getCompetitionTransfers: builder.query({
			query: (compId) => {
				return {
					url: `/${compId}/transfers`,
					method: "GET",
				};
			},
		}),
	}),
});

export const {
	useGetCompetitionsQuery,
	useGetCompetitionTableQuery,
	useGetCompetitionResultsQuery,
	useGetCompetitionFixturesQuery,
	useGetCompetitionNewsQuery,
	useGetCompetitionTransfersQuery,
} = footballApi;
export { footballApi };
