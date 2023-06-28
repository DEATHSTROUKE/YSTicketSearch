import s from "./page.module.css";
import Filter from "@/components/Filter/Filter";
import FilmsList from "@/components/FilmsList/FilmsList";
import { BASE_URL } from "@/store/features/cart/filmsApi";
import { Cinema } from "@/types/Cinema";

export default async function Home() {
  const cinemaRequest = await fetch(`${BASE_URL}/cinemas`);
  const cinemas: Cinema[] = await cinemaRequest.json();

  return (
    <div className={s.main__wrapper}>
      <div className={s.sidebar}>
        <Filter cinemas={cinemas}/>
      </div>
      <FilmsList />
    </div>
  );
}
