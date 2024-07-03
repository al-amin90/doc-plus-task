import banner from "../../../assets/Rectangle 5.png";

const Banner = () => {
  return (
    <div
      className="max-w-[1480px] z-20 mt-4 mx-auto w-[87%] rounded-[30px] lg:rounded-[40px] h-[250px] md:h-[450px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="bg-gradient-to-b from-[#00c19e18] to-[#02004378] rounded-[30px] lg:rounded-[40px] h-full  ">
        <div className="mx-auto h-full w-[90%] md:w-[85%] flex items-center"></div>
      </div>
    </div>
  );
};

export default Banner;
