import s from "./review-item.module.css";
import Image from "next/image";
import pictureSvg from "../../../public/photo.svg";

const ReviewItem = () => {
  return <div className={s.review__wrapper}>
    <div className={s.review__img}>
      <Image src={pictureSvg}
             width={32}
             height={32}
             alt="Постер"
      />
    </div>
    <div className={s.review__row}>
      <div className={s.review__line}>
        <div className={s.review__title}>
          Роман
        </div>
        <div className={s.review__right}>
          Оценка: &nbsp; <b>8</b>
        </div>
      </div>
      <div className={s.review__text}>
        По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот
        момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в
        целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я
        словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом
        статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих
        эльфов или мерзких орков – кому как повезет...
      </div>
    </div>
  </div>
}

export default ReviewItem;