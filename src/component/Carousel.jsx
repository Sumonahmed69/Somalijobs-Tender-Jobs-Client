// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  const bg1 =
    "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bg2 =
    "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bg3 =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
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
          <Slide
            img={bg1}
            text="Get Your Web Development Projects Done in minutes"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={bg2}
            text="Get Your Graphics Design Projects Done in minutes"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={bg3}
            text="Start Your Digital Marketing Campaigns up n running"
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
