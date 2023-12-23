import React, { useEffect, useState } from "react";
import styles from "./SlideArrow.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../../assets/LeftSwipe.svg";
import { ReactComponent as RightArrow } from "../../../../assets/RightSwipe.svg";

export default function SlideArrow({ type }) {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  switch (type) {
    case "left": {
      return (
        !isBeginning && (
          <div className={`${styles.arrow} ${styles.left}`}>
            <LeftArrow onClick={() => swiper.slidePrev()} />
          </div>
        )
      );
    }
    case "right": {
      return (
        !isEnd && (
          <div className={`${styles.arrow} ${styles.right}`}>
            <RightArrow onClick={() => swiper.slideNext()} />
          </div>
        )
      );
    }
    default: {
      return <></>;
    }
  }
}
