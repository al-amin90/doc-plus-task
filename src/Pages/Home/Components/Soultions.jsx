import { GoArrowUpRight } from "react-icons/go";
import imgPeople from "../../../assets/Rectangle 24.png";
import PrimaryBtn from "../../../components/PrimaryBtn";
import SectionTile from "../../../components/SectionTile";

const Soultions = () => {
  return (
    <div className="max-w-[1480px] mt-4 mb-40 mx-auto w-[87%]">
      <div className="flex ">
        <div className="flex-1">
          <SectionTile
            subTitle="Who we are"
            title="We Help To Get Soultions"
          ></SectionTile>
          <p className="text-[#4d4c7b] text-base w-[76%]">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>

          <button
            className={`flex mt-10 text-base text-black bg-[#FFC637] font-medium rounded-xl py-2  px-6`}
          >
            Learn more
            <GoArrowUpRight className="text-2xl "></GoArrowUpRight>
          </button>
        </div>

        <div className="flex-1">
          <img src={imgPeople} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Soultions;
