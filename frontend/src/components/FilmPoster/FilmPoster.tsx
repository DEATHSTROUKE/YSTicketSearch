"use client";

import s from "./film_poster.module.css";
import Image from "next/image";
import TicketsCount from "@/components/TicketsCount/TicketsCount";
import { useGetFilmQuery } from "@/store/features/cart/filmsApi";
import { useFilmQuantity } from "@/store/features/cart/cartSlice";
import { Genres } from "@/types/Film";

const FilmPoster = ({ id }): { id: string } => {
  const { data, error, isLoading } = useGetFilmQuery(id);

  const renderFilms = () => {
    if (!data) return null;
    if (data.length === 0) return <div>Билетов нет :(</div>;
    const {
      description,
      director,
      genre,
      posterUrl,
      rating,
      releaseYear,
      title,
    } = data;
    return <div className={s.film__wrapper}>
      <div className={s.film__image}>
        <Image src={posterUrl}
               width={400}
               height={500}
               alt="Постер фильма" />
      </div>
      <div className={s.film__row}>
        <div className={s.film__line}>
          <div className={s.film__title}>
            {title}
          </div>
          <FilmProvider film={data} />
        </div>
        <div className={s.film_data}>
          <div className={s.film_data__title}>Жанр:</div>
          <div className={s.film_data__text}>{Genres[genre]}</div>
        </div>
        <div className={s.film_data}>
          <div className={s.film_data__title}>Год выпуска:</div>
          <div className={s.film_data__text}>{releaseYear}</div>
        </div>
        <div className={s.film_data}>
          <div className={s.film_data__title}>Рейтинг:</div>
          <div className={s.film_data__text}>{rating}</div>
        </div>
        <div className={s.film_data}>
          <div className={s.film_data__title}>Режисер:</div>
          <div className={s.film_data__text}>{director}</div>
        </div>
        <div className={s.description}>
          <div className={s.description__title}>
            Описание
          </div>
          <div className={s.description__text}>
            {description}
          </div>
        </div>
      </div>
    </div>;
  };

  if (error) return <div>Ошибка</div>;
  return <div className={s.films_list}>{isLoading ? <div>Загрузка...</div> : renderFilms()}</div>;
};

const FilmProvider = ({ film }) => {
  const { quantity, incQuantity, decQuantity } = useFilmQuantity(film);
  return <>
    <TicketsCount
      quantity={quantity}
      incQuantity={incQuantity}
      decQuantity={decQuantity}
    />
  </>;
};

export default FilmPoster;