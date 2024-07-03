import { GoArrowUpRight } from "react-icons/go";
import banner from "../../../assets/Rectangle 32.png";
import logo from "../../../assets/logo light.png";
import PrimaryBtn from "../../../components/PrimaryBtn";

const Appointment = () => {
  return (
    <div className="py-40">
      <div
        className="max-w-[1480px]  mx-auto w-[87%] rounded-[30px] lg:rounded-[40px] h-[250px] md:h-[450px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="bg-gradient-to-r from-[#020043] to-[#0200434D] rounded-[30px] lg:rounded-[40px] h-full  relative">
          <div className="mx-auto h-full p-14 flex items-center">
            <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-normal font-semibold text-center md:text-left">
                Get Your <br /> First Appointment <br /> at 50% Off!
              </h2>

              {/* btns is here */}
              <div className="flex gap-5 mt-7 justify-center md:justify-start">
                <button
                  className={`flex  text-base text-black bg-[#FFC637] font-medium rounded-xl py-3  px-6`}
                >
                  Appointment
                  <GoArrowUpRight className="text-2xl "></GoArrowUpRight>
                </button>

                <button
                  className={`flex text-base font-medium border border-white text-white rounded-xl py-3  px-6`}
                >
                  Learn More
                  <GoArrowUpRight className="text-2xl text-white"></GoArrowUpRight>
                </button>
              </div>
            </div>

            {/* left */}
            <div>
              <img className="absolute top-14 right-14" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
