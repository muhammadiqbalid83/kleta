// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  const [swiper, setSwiper] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (swiper) {
      swiper.autoplay.stop(); // Berhenti otomatis saat mouseOnOver
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (swiper) {
      swiper.autoplay.start(); // Memulai otomatis lagi saat mouseLeave
    }
  };
  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          navigation={isHovered}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-04.jpg"
              alt=""
            />
            <div className="absolute left-[50px] text-left">
              <h5 className="text-[13px] font-bold">SUMMER 2023 COLLECTION</h5>
              <h1 className="font-thin text-[70px] leading-[80px] mt-[20px]">
                Valentin Paul <br />
                Essential Collection
              </h1>
              <p className="text-[13px] text-gray-400 mt-5 mb-[50px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button className="border border-gray-700 rounded py-2 px-4">
                <Link to={"/"} className="text-[14px] font-semibold">
                  Shop Collection
                </Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-05.jpg"
              alt=""
            />
            <div className="absolute left-[50px] text-left">
              <h5 className="text-[13px] font-bold">SUMMER 2023 COLLECTION</h5>
              <h1 className="font-thin text-[70px] leading-[80px] mt-[20px]">
                Making someone <br />
                feel pretty is an art
              </h1>
              <p className="text-[13px] text-gray-400 mt-5 mb-[50px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button className="border border-gray-700 rounded py-2 px-4">
                <Link to={"/"} className="text-[14px] font-semibold">
                  Shop Collection
                </Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-06.jpg"
              alt=""
            />
            <div className="absolute left-[50px] text-left">
              <h5 className="text-[13px] font-bold">SUMMER 2023 COLLECTION</h5>
              <h1 className="font-thin text-[70px] leading-[80px] mt-[20px]">
                Valentin Paul <br />
                Essential Collection
              </h1>
              <p className="text-[13px] text-gray-400 mt-5 mb-[50px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button className="border border-gray-700 rounded py-2 px-4">
                <Link to={"/"} className="text-[14px] font-semibold">
                  Shop Collection
                </Link>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
