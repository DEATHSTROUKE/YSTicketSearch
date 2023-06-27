import s from "./film.module.css";
import TicketsCount from "@/components/TicketsCount/TicketsCount";
import Image from "next/image";
import pictureSvg from "@/../public/photo.svg";
import ReviewItem from "@/components/ReviewItem/ReviewItem";
import ReviewList from "@/components/ReviewList/ReviewList";
import FilmPoster from "@/components/FilmPoster/FilmPoster";

const Film = () => {
  return <div className={s.page__wrapper}>
    <FilmPoster />
    <ReviewList />
  </div>;
};

export default Film;