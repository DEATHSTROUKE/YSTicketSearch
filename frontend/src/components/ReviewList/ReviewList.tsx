"use client";

import { useGetReviewsQuery } from "@/store/features/cart/filmsApi";
import s from "@/components/FilmPoster/film_poster.module.css";
import ReviewItem from "@/components/ReviewItem/ReviewItem";

const ReviewList = ({ id }) => {
  const { data, error, isLoading } = useGetReviewsQuery(id);

  const renderReviews = () => {
    if (!data) return null;
    return data.map(({ id, name, text, rating }, index) => {
      return <ReviewItem key={id + index} id={id} name={name} text={text} rating={rating} />;
    });
  };

  if (error) return <div>Ошибка</div>;
  return <div className={s.films_list}>{isLoading ? <div>Загрузка...</div> : renderReviews()}</div>;
};

export default ReviewList;