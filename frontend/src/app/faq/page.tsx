import s from "./faq.module.css";
import ArrowSvg from "@/../public/arrow.svg";
import Question from "@/components/Question/Question";


const Faq = () => {
  return <div className={s.faq__wrapper}>
    <div className={s.title}>Вопросы-ответы</div>
    <Question
      title="Что такое Билетопоиск?"
      text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
    />
    <Question
      title="Какой компании принадлежит Билетопоиск?"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, placeat."
    />
    <Question
      title="Как купить билет на Билетопоиск?"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis expedita ullam vero nemo vel quos temporibus similique modi rem sapiente ipsum a, nulla laborum culpa, magnam, hic officiis corporis."
    />
    <Question
      title="Как оставить отзыв на Билетопоиск?"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, magni? Porro reiciendis assumenda tempora? Dicta, possimus. Explicabo saepe id nesciunt."
    />
  </div>;
};

export default Faq;