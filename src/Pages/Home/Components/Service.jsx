import xrayPicture from "../../../assets/Rectangle 27-2.png";
import oldmanPicture from "../../../assets/Rectangle 27-1.png";
import womanPicture from "../../../assets/Rectangle 27.png";
import { GoArrowUpRight } from "react-icons/go";
import SectionTile from "../../../components/SectionTile";

const Service = () => {
  return (
    <div className="max-w-[1480px] bg-white p-10 rounded-[30px] mt-4 mb-40 mx-auto w-[87%]">
      <div className="grid grid-cols-1  md:grid-cols-2">
        {/* left side */}
        <div className="flex-1">
          <SectionTile
            subTitle="Service"
            title="Empowering Health, Enriching Lives"
          ></SectionTile>
          <p className="text-[#4d4c7b] text-base w-[70%]">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>

          <button
            className={`flex mt-10 text-base text-black bg-[#FFC637] font-medium rounded-xl py-3  px-6`}
          >
            Appointment
            <GoArrowUpRight className="text-2xl "></GoArrowUpRight>
          </button>
        </div>
        {/* right side */}
        <div className="relative pl-4">
          <img className="w-full rounded-[30px]" src={xrayPicture} alt="" />
          {/* massage box */}
          <div className="p-7 flex absolute bottom-5 left-9 w-[330px] rounded-[20px] text-white bg-[#0200438a]">
            <div>
              <h5 className="font-medium text-xl mb-2">Advanced Technology</h5>
              <p className="font-normal text-xs w-[97%] leading-normal opacity-80">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className="bg-[#FFC637] mr-auto w-fit h-fit mt-auto p-3 rounded-full">
              <GoArrowUpRight className="text-2xl text-white"></GoArrowUpRight>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-14 gap-7 md:grid-cols-2">
        <div className="relative">
          <img className="w-full rounded-[30px]" src={oldmanPicture} alt="" />
          {/* massage box */}
          <div className="p-7 flex absolute left-5 bottom-5 w-[330px] rounded-[20px] text-white bg-[#0200438a]">
            <div>
              <h5 className="font-medium text-xl mb-2">Online Doctor Meet</h5>
              <p className="font-normal text-xs w-[97%] leading-normal opacity-80">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className="bg-[#FFC637] mr-auto w-fit h-fit mt-auto p-3 rounded-full">
              <GoArrowUpRight className="text-2xl text-white"></GoArrowUpRight>
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full rounded-[30px]" src={womanPicture} alt="" />
          {/* massage box */}
          <div className="p-7 flex absolute left-5 bottom-5 w-[330px] rounded-[20px] text-white bg-[#0200438a]">
            <div className="pr-7">
              <h5 className="font-medium text-xl mb-2">
                Consultancy your health
              </h5>
              <p className="font-normal text-xs w-[90%] leading-normal opacity-80">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className="bg-[#FFC637] absolute right-7 bottom-7 mr-auto w-fit h-fit mt-auto p-3 rounded-full">
              <GoArrowUpRight className="text-2xl text-white"></GoArrowUpRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
