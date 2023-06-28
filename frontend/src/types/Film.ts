export interface Film {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: keyof Genres;
  id: string;
  rating: number;
  director: string;
}

export const Genres: { string: string } = {
  fantasy: "Фэнтези",
  horror: "Хоррор",
  action: "Экшен",
  comedy: "Комедия",
};
