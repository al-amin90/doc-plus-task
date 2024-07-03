import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTile from "../../../components/SectionTile";
import miniStar from "../../../assets/ministar.png";
import avatar1 from "../../../assets/testimonial/avatar (2).png";
import avatar2 from "../../../assets/testimonial/avatar (3).png";
import avatar3 from "../../../assets/testimonial/avatar (1).png";

const Testimonial = () => {
  return (
    <div className="max-w-[1480px] text-primaryColor mb-40 mx-auto w-[87%]">
      <SectionTile
        subTitle="Testimonial"
        title="What they say about us"
      ></SectionTile>

      <div className="py-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <div className="p-5 bg-white w-full h-60 rounded-2xl text-primaryColor ">
              <h3 className="text-xl font-semibold">
                Expertise and Compassion Combined
              </h3>
              <p className="text-[#4d4c7b] mt-3 text-xs ">
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={avatar1}
                  alt=""
                  className="w-11 h-11 bg-center bg-cover rounded-full "
                />
                <div>
                  <p className="text-xs font-semibold">
                    Sarah D,{" "}
                    <span className="font-medium">IT Professional</span>
                  </p>
                  <div className="flex gap-1 mt-1">
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="p-5 bg-white w-full h-60 rounded-2xl text-primaryColor ">
              <h3 className="text-xl font-semibold">
                Life-Saving Care, Life-Changing Experience
              </h3>
              <p className="text-[#4d4c7b] mt-3 text-xs ">
                My experience at [Healthcare Provider Name] was life-changing.
                The prompt and accurate diagnosis, coupled with the advanced
                treatments they provided, saved my life.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={avatar2}
                  alt=""
                  className="w-11 h-11 bg-center bg-cover rounded-full "
                />
                <div>
                  <p className="text-xs font-semibold">
                    Michael R,
                    <span className="font-medium">Business Executive</span>
                  </p>
                  <div className="flex gap-1 mt-1">
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="p-5 bg-white w-full h-60 rounded-2xl text-primaryColor ">
              <h3 className="text-xl font-semibold">
                A Partner in Health and Wellness
              </h3>
              <p className="text-[#4d4c7b] mt-3 text-xs ">
                As a busy professional, I appreciate the convenience and quality
                of care I receive at [Healthcare Provider Name]. From
                telemedicine consultations to routine check-ups, they've become
                my trusted partner in health and
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={avatar3}
                  alt=""
                  className="w-11 h-11 bg-center bg-cover rounded-full "
                />
                <div>
                  <p className="text-xs font-semibold">
                    David S,
                    <span className="font-medium">Lawyer</span>
                  </p>
                  <div className="flex gap-1 mt-1">
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="p-5 bg-white w-full h-60 rounded-2xl text-primaryColor ">
              <h3 className="text-xl font-semibold">
                Life-Saving Care, Life-Changing Experience
              </h3>
              <p className="text-[#4d4c7b] mt-3 text-xs ">
                My experience at [Healthcare Provider Name] was life-changing.
                The prompt and accurate diagnosis, coupled with the advanced
                treatments they provided, saved my life.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={avatar2}
                  alt=""
                  className="w-11 h-11 bg-center bg-cover rounded-full "
                />
                <div>
                  <p className="text-xs font-semibold">
                    Michael R,
                    <span className="font-medium">Business Executive</span>
                  </p>
                  <div className="flex gap-1 mt-1">
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                    <img src={miniStar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
