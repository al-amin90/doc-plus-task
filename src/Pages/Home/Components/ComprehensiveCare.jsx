import pie from "../../../assets/comprehensive/pie.png";
import carti from "../../../assets/comprehensive/cercificate.png";
import star from "../../../assets/comprehensive/star.png";
import people from "../../../assets/comprehensive/people.png";
import coin from "../../../assets/comprehensive/coin.png";
import zoom from "../../../assets/comprehensive/zoom.png";

const ComprehensiveCare = () => {
  return (
    <div className="max-w-[1480px] relative text-primaryColor mt-11 mb-40 mx-auto w-[87%]">
      <h2 className="text-center -top-3 translate-x-1/2 right-1/2 text-5xl font-semibold absolute ">
        Comprehensive Care <br /> for Every Patient
      </h2>
      <div className="grid grid-cols-5  gap-4 ">
        {/* 1st part */}
        <div className="bg-white p-5 border border-[#02004325] rounded-3xl">
          <h3 className="text-[40px] font-semibold">90%</h3>
          <p className="text-sm w-[80%]">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img className="mx-auto mt-5" src={pie} alt="" />
        </div>
        {/* 2nd part */}
        <div className="bg-white h-fit mt-auto p-5 border border-[#02004325] rounded-3xl">
          <h3 className="text-[40px] font-semibold">500+</h3>
          <p className="text-sm w-[80%]">
            Board-certified <br /> doctors
          </p>
          <img className="ml-auto -mt-3" src={carti} alt="" />
        </div>
        {/* 3rd part */}
        <div className="bg-white h-fit mt-auto p-5 border border-[#02004325] rounded-3xl">
          <div className="flex items-center">
            <h3 className="text-[40px] font-semibold">4.8 </h3>
            <img src={star} className="w-[32px] h-[32px]" alt="" />
          </div>
          <p className="text-sm ">Over 20,000 Patient</p>
          <img className=" mt-3" src={people} alt="" />
        </div>
        {/* 4th part */}
        <div className="bg-white h-fit mt-auto p-5 border border-[#02004325] rounded-3xl">
          <h3 className="text-[40px] font-semibold">$5000 </h3>

          <p className="text-sm w-[80%]">
            Money spend <br /> for poor patient
          </p>
          <img className="ml-auto -mt-3" src={coin} alt="" />
        </div>
        {/* 5th part */}
        <div className="bg-white p-5 border flex justify-between flex-col border-[#02004325] rounded-3xl">
          <div>
            <h3 className="text-[40px] font-semibold">50+</h3>
            <p className="text-sm w-[80%]">Free lession video for patient</p>
          </div>
          <img className="mx-auto  " src={zoom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCare;
