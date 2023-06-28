import s from "./film_card.module.css";
import Image from "next/image";
import Link from "next/link";
import TicketsCount from "@/components/TicketsCount/TicketsCount";
import { useFilmQuantity } from "@/store/features/cart/cartSlice";
import { Genres } from "@/types/Film";
import closeSvg from "@/../public/close.svg";

const CartFilmCard = ({ film, onDelete }) => {
  const { quantity, incQuantity, decQuantity } = useFilmQuantity(film);
  const { id, posterUrl, genre, title } = film;

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
          <div style={{marginRight: 10}}>
            <TicketsCount quantity={quantity}
                          incQuantity={incQuantity}
                          decQuantity={decQuantity}
            />
          </div>
          <DeleteFilm callback={() => onDelete(film)} />
        </div>
      </div>
      <div className={s.film__genre}>
        {Genres[genre]}
      </div>
    </div>
  </div>;
};

const DeleteFilm = ({ callback }) => {
  return <button onClick={callback}>
    <Image src={closeSvg}
           alt="Удалить фильм из корзины"
           width={20}
           height={20}
    />
  </button>;
};

export default CartFilmCard;