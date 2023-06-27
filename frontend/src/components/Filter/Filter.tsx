import s from "./filter.module.css";
import Image from "next/image";
import arrowSvg from "@/../public/arrow.svg";

const Filter = () => {
  return <div className={s.filter__wrapper}>
    <div className={s.filter__title}>Фильтр поиска</div>

    <div className={s.field}>
      <div className={s.label}>Название</div>
      <div className={s.input}>
        <input type="text" placeholder="Введите название" />
      </div>
    </div>

    <div className={s.field}>
      <div className={s.label}>Жанр</div>
      <div className={s.input}>
        <div className={s.placeholder}>Выберите Жанр</div>
        <div>
          <Image src={arrowSvg}
                 alt="Развернуть список"
                 width={20}
                 height={20}
          />
        </div>
      </div>
    </div>

    <div className={s.field}>
      <div className={s.label}>Кинотеатр</div>
      <div className={s.input}>
        <div className={s.placeholder}>Выберите кинотеатр</div>
        <div>
          <Image src={arrowSvg}
                 alt="Развернуть список"
                 width={20}
                 height={20}
          />
        </div>
      </div>
    </div>
  </div>;
};

export default Filter;