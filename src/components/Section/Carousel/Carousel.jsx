import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import React, { useEffect } from "react";
import Card from "../Card/Card";
import SlideArrow from "./SlideArrow/SlideArrow";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};
export default function Carousel({ data, type }) {
  return (
    <Swiper
      style={{ padding: "0px 20px" }}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      navigation
      allowTouchMove
      className={styles.carousel}
    >
      <Controls data={data} />
      <SlideArrow type={"left"} />
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Card cardData={item} type={type} />
        </SwiperSlide>
      ))}
      <SlideArrow type={"right"} />
    </Swiper>
  );
}
