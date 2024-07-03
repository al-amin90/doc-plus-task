import icon from "../../../assets/icons.png";
import logo from "../../../assets/logo light.png";

const Footer = () => {
  return (
    <div className="bg-primaryColor text-white">
      <footer className="max-w-7xl px-4 py-28 md:px-0 md:w-[80%] mx-auto">
        <div>
          <img className="mb-6" src={logo} alt="" />
        </div>
        <div className="container md:flex justify-between sm:gap-24 ">
          <div className="space-y-3 w-4/12">
            <p className=" text-sm font-light">
              123 Main Street Anytown, USA <br /> Postal Code: 12345
            </p>
            <p className=" text-sm font-light">
              Support: support@oyolloo.com (Available : 10:00am to 07:00pm)
            </p>
          </div>
          <div className="grid grid-cols-2 w-full text-sm sm:grid-cols-3">
            <div className="space-y-3">
              <ul className="space-y-3  font-light">
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Home
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    About us
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Success Page
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Terms and condition
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <ul className="space-y-3  font-light">
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Services
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Scheduling
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="text-sm hover:font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Patient Portal
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className=" text-sm mb-3 font-light">Follow Us</p>
                <img src={icon} alt="" />
              </div>
              <p className=" text-sm font-light">@docplus 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
