import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./slider.css";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="pt-10 pb-20 font-body">
      <Swiper
        loop={true}
        effect={"fade"}
        spaceBetween={30}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper h-[600px] rounded-2xl w-full"
      >
        <SwiperSlide>
          <div className=" w-full h-full relative cursor-pointer group  ">
            <img
              className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
              src="https://i.ibb.co/61RN5Wn/image.png"
              alt="this is test image 1"
            />
            <div className=" flex justify-center items-center flex-col text-white absolute inset-0  bg-black bg-opacity-40  space-y-4  ">
              <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl font-bold">
                Simplified Daily Work Logging
              </h1>

              <p className="max-w-lg text-center">
                Empower your employees with an easy-to-use platform to register
                their daily tasks effortlessly. Enhance productivity and keep
                track of work progress in real-time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full relative cursor-pointer group  ">
            <img
              className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
              src="https://i.ibb.co/WkSbNLH/image.png"
              alt="this is test image 1"
            />
            <div className=" flex justify-center items-center flex-col text-white absolute inset-0  bg-black bg-opacity-40  space-y-4  ">
              <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl font-bold">
                Efficient Payroll Management
              </h1>

              <p className="max-w-lg text-center">
                Ensure timely and accurate payments with our efficient payroll
                management system. HR can easily manage salaries, track work
                hours, and handle all payment-related tasks seamlessly.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full relative cursor-pointer group  ">
            <img
              className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
              src="https://i.ibb.co/brYgnV5/image.png"
              alt="this is test image 1"
            />
            <div className=" flex justify-center items-center flex-col text-white absolute inset-0  bg-black bg-opacity-40  space-y-4  ">
              <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl font-bold">
                Comprehensive User Control
              </h1>

              <p className="max-w-lg text-center">
                Admins have complete control over user management, site
                settings, and more. Customize the platform to suit your
                organization's needs and ensure smooth operations
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full relative cursor-pointer group  ">
            <img
              className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
              src="https://i.ibb.co/tLmfqzw/image.png"
              alt="this is test image 1"
            />
            <div className=" flex justify-center items-center flex-col text-white absolute inset-0  bg-black bg-opacity-40  space-y-4  ">
              <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl font-bold">
                Enhance Employee Engagement
              </h1>

              <p className="max-w-lg text-center">
                Foster a more engaged and motivated workforce. Our system
                provides employees with a transparent view of their work and
                payments, promoting a culture of trust and efficiency
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full relative cursor-pointer group  ">
            <img
              className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
              src="https://i.ibb.co/cNJ7QFK/image.png"
              alt="this is test image 1"
            />
            <div className=" flex justify-center items-center flex-col text-white absolute inset-0  bg-black bg-opacity-40  space-y-4  ">
              <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl font-bold">
                Centralized HR Management
              </h1>

              <p className="max-w-lg text-center">
                Integrate all your HR processes into a single, cohesive
                platform. Manage employee records, streamline payroll, and
                oversee all HR activities efficiently to enhance organizational
                productivity
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
