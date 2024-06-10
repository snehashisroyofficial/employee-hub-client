import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Feedback from "../../assets/Testimonials.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Testimonials</h2>
        <p className="text-gray-600  max-w-md mx-auto">
          See how our platform empowers employees, simplifies HR tasks, and
          enhances overall workflow.
        </p>
      </div>

      <Swiper
        loop={true}
        spaceBetween={30}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        slidesPerView={"auto"}
        className="mySwiper  "
      >
        {Feedback.map((item, idx) => (
          <SwiperSlide key={idx} className=" h-full py-4">
            {" "}
            <div className="w-full p-8 h-full  bg-gray-100 rounded-md  dark:bg-gray-800 max-w-lg">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                " {item.feedback} "
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src={item.authorimage}
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {item.author}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
