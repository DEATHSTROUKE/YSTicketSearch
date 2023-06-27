import s from "./film_poster.module.css";
import Image from "next/image";
import TicketsCount from "@/components/TicketsCount/TicketsCount";

const FilmPoster = () => {
  return <div className={s.film__wrapper}>
    <div className={s.film__image}>
      <Image src="https://i.postimg.cc/pdCLNMqX/1.webp"
             width={400}
             height={500}
             alt="Постер фильма" />
    </div>
    <div className={s.film__row}>
      <div className={s.film__line}>
        <div className={s.film__title}>
          Властелин колец: Братство кольца
        </div>
        <TicketsCount />
      </div>
      <div className={s.film_data}>
        <div className={s.film_data__title}>Жанр:</div>
        <div className={s.film_data__text}>Фэнтези</div>
      </div>
      <div className={s.film_data}>
        <div className={s.film_data__title}>Год выпуска:</div>
        <div className={s.film_data__text}>2001</div>
      </div>
      <div className={s.film_data}>
        <div className={s.film_data__title}>Рейтинг:</div>
        <div className={s.film_data__text}>8</div>
      </div>
      <div className={s.film_data}>
        <div className={s.film_data__title}>Режисер:</div>
        <div className={s.film_data__text}>Питер Джексон</div>
      </div>
      <div className={s.description}>
        <div className={s.description__title}>
          Описание
        </div>
        <div className={s.description__text}>
          Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел
          Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя
          на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о
          кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья
          Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над
          Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.
        </div>
      </div>
    </div>
  </div>;
};

export default FilmPoster;