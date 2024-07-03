import React from "react";

const SectionTile = ({ title, subTitle }) => {
  return (
    <div>
      <div className="text-primaryColor">
        <h4 className="py-2 border border-[#343268CC] w-fit rounded-full px-6">
          {subTitle}
        </h4>
        <h2 className="w-[70%] leading-snug text-4xl font-semibold my-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTile;
