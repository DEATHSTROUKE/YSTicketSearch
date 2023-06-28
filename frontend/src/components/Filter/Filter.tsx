"use client";

import s from "./filter.module.css";
import Image from "next/image";
import arrowSvg from "@/../public/arrowGray.svg";
import localFont from "@next/font/local";
import cn from "classnames";
import { CartSlice, CartState, changeNameFilter } from "@/store/features/cart/cartSlice";
import { useDebouncedEffect } from "@/components/Filter/debounce";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Genres } from "@/types/Film";

const SFPro = localFont({
  src: "../../../public/fonts/SFProText-Regular.ttf",
  variable: "--font-sf",
});

const Filter = ({ cinemas }) => {
  const filter = useSelector<CartSlice, CartState["filter"]>(
    ({ cart }) => cart.filter,
  );

  const dispatch = useDispatch();

  const [nameFilter, setNameFilter] = useState(filter.name);

  useDebouncedEffect(() => {
    dispatch(changeNameFilter(nameFilter));
  }, [nameFilter]);

  const cinemasDropdown: DropdownItem[] = useMemo(() => {
    return cinemas
      ? cinemas.map(
        ({ id, name }): DropdownItem => ({ label: name, value: id }),
      )
      : [];
  }, [cinemas]);

  const genres = Object.keys(Genres).map(
    (genre): DropdownItem => ({
      label: Genres[genre],
      value: genre.toLowerCase(),
    }),
  );

  return <div className={cn(s.filter__wrapper, SFPro.variable)}>
    <div className={s.filter__title}>Фильтр поиска</div>

    <div className={s.field}>
      <div className={s.label}>Название</div>
      <div className={s.input}>
        <input
          type="text"
          placeholder="Введите название"
          value={nameFilter ?? ""}
          onInput={(e) => setNameFilter(e.target.value)}
        />
      </div>
    </div>

    <div className={s.field}>
      <div className={s.label}>Жанр</div>
      <div className={s.input}>
        <div className={s.placeholder}>Выберите Жанр</div>
        <div className={s.img__wrapper}>
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