import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film } from "@/types/Film";
import type { Cinema } from "@/types/Cinema";
import { Review } from "@/types/Review";

export const BASE_URL = "http://localhost:3001/api";

export const filmsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], Cinema["id"] | undefined | null>({
      query: (id) => ({
        url: "movies",
        params: {
          cinemaId: id,
        },
      }),
    }),
    getFilm: builder.query<Film, string>({
      query: (movieId: string) => `movie?movieId=${movieId}`,
    }),
    getReviews: builder.query<Review[], string>({
      query: (movieId: string) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmQuery,
  useGetReviewsQuery,
} = filmsApi;
