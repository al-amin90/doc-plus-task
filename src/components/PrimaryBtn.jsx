import { GoArrowUpRight } from "react-icons/go";

const PrimaryBtn = ({ text, color, bgColor }) => {
  return (
    <div>
      <button
        className={`flex text-base bg-[${bgColor}] font-medium border border-[${color}] text-[${color}] rounded-xl py-3  px-6`}
      >
        {text}{" "}
        <GoArrowUpRight className="text-2xl text-[${color}]"></GoArrowUpRight>
      </button>
    </div>
  );
};

export default PrimaryBtn;
