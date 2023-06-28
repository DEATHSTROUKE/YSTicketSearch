import s from "./review-item.module.css";
import Image from "next/image";
import pictureSvg from "../../../public/photo.svg";

const ReviewItem = ({ id, name, text, rating }) => {
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
          {name}
        </div>
        <div className={s.review__right}>
          Оценка: &nbsp; <b>{rating}</b>
        </div>
      </div>
      <div className={s.review__text}>
        {text}
      </div>
    </div>
  </div>;
};

export default ReviewItem;