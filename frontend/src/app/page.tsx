import s from "./page.module.css";
import Filter from "@/components/Filter/Filter";
import FilmsList from "@/components/FilmsList/FilmsList";

export default function Home() {
  return (
    <div className={s.main__wrapper}>
      <div className={s.sidebar}>
        <Filter />
      </div>
      <FilmsList />
    </div>
  );
}
