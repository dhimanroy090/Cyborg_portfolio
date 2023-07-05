import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/1.jpg";
import image5 from "../../assets/images/2.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-3/4 mx-auto" src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-3/4 mx-auto" src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-3/4 mx-auto" src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-3/4 mx-auto" src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-3/4 mx-auto" src={image5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
