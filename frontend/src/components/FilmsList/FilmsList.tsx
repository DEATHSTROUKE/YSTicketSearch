"use client";
import s from "./films_list.module.css";
import FilmCard from "@/components/FilmCard/FilmCard";
import { useSelector } from "react-redux";
import { useGetFilmsQuery } from "@/store/features/cart/filmsApi";

const FilmsList = () => {
  const filter = useSelector<CartSlice, CartState["filter"]>(
    ({ cart }) => cart.filter,
  );

  const { data, error, isLoading } = useGetFilmsQuery(filter.cinemaId, {
    selectFromResult: ({ data, ...rest }) => ({
      data: data
        ?.filter(({ title }) => {
          if (!filter.name || filter.name.trim().length < 1) return true;

          return title
            .toLowerCase()
            .startsWith(filter.name.toLowerCase().trim());
        })
        .filter(({ genre }) => {
          if (!filter.genre) return true;

          return genre === filter.genre;
        }),
      ...rest,
    }),
  });

  const renderFilms = () => {
    if (!data) return null;
    if (data.length === 0) return <div>Билетов нет :(</div>;
    return data.map((film) => <FilmCard key={film.id} film={film} />);
  };

  if (error) return <div>Ошибка</div>;
  return <div className={s.films_list}>{isLoading ? <div>Загрузка...</div> : renderFilms()}</div>;
};

export default FilmsList;