import Image from 'next/image'
import s from './page.module.css'
import Filter from "@/components/Filter/Filter";
import FilmCard from "@/components/FilmCard/FilmCard";

export default function Home() {
  return (
    <div className={s.main__wrapper}>
        <div className={s.sidebar}>
          <Filter />
        </div>
        <div className={s.films_list}>
          <FilmCard />
        </div>
    </div>
  )
}
