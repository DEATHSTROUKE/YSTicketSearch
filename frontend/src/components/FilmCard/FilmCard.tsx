import s from "./film_card.module.css";
import Image from "next/image";
import Link from "next/link";
import TicketsCount from "@/components/TicketsCount/TicketsCount";

const FilmCard = () => {
  return <div className={s.film__wrapper}>
    <div className={s.film__poster}>
      <Image src="https://i.postimg.cc/pdCLNMqX/1.webp"
             width={100}
             height={120}
             alt="Постер"
      />
    </div>
    <div className={s.film__row}>
      <div className={s.film__line}>
        <div className={s.film__title}>
          <Link href="/film/123">Властелин колец: Братство кольца</Link>
        </div>
        <div className={s.film__right}>
          <TicketsCount />
        </div>
      </div>
      <div className={s.film__genre}>
        Фэнтэзи
      </div>
    </div>
  </div>
}

export default FilmCard;