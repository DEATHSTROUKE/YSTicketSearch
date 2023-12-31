import s from "./film_card.module.css";
import Image from "next/image";
import Link from "next/link";
import TicketsCount from "@/components/TicketsCount/TicketsCount";
import { useFilmQuantity } from "@/store/features/cart/cartSlice";
import { Genres } from "@/types/Film";

const FilmCard = ({ film }) => {
  const { id, posterUrl, genre, title } = film;
  const { quantity, incQuantity, decQuantity } = useFilmQuantity(film);

  return <div className={s.film__wrapper}>
    <div className={s.film__poster}>
      <Image src={posterUrl}
             width={100}
             height={120}
             alt="Постер"
      />
    </div>
    <div className={s.film__row}>
      <div className={s.film__line}>
        <div className={s.film__title}>
          <Link href={"/films/" + id}>{title}</Link>
        </div>
        <div className={s.film__right}>
          <TicketsCount quantity={quantity}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
          />
        </div>
      </div>
      <div className={s.film__genre}>
        {Genres[genre]}
      </div>
    </div>
  </div>;
};

export default FilmCard;