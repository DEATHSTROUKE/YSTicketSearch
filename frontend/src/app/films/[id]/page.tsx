import s from "./film.module.css";
import ReviewList from "@/components/ReviewList/ReviewList";
import FilmPoster from "@/components/FilmPoster/FilmPoster";

const Film = ({ params }): { id: string } => {

  return <div className={s.page__wrapper}>
    <FilmPoster id={params.id} />
    <ReviewList id={params.id} />
  </div>;
};

export default Film;