import React from "react";
import SectionTile from "../../../components/SectionTile";

const Faq = () => {
  return (
    <div className="max-w-[1480px] text-primaryColor mx-auto w-[87%]">
      <SectionTile
        subTitle="Faq"
        title="Frequntly Asked Question"
      ></SectionTile>
      <div className="gap-3 pt-4 flex flex-col">
        {/* 1st faq */}
        <div className="collapse collapse-arrow rounded-lg">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title  bg-[#FFFFF5]  text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content font-normal text-sm text-[#343268] bg-white border-t border-[#DBDBDD]">
            <p className="pt-4">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        {/* 2nd faq */}
        <div className="collapse collapse-arrow rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  bg-[#FFFFF5]  text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content font-normal text-sm text-[#343268]  bg-white border-t border-[#DBDBDD]">
            <p className="pt-4">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        {/* 3rd faq */}
        <div className="collapse collapse-arrow rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  bg-[#FFFFF5]  text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content font-normal text-sm text-[#343268]  bg-white border-t border-[#DBDBDD]">
            <p className="pt-4">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        {/* 4th faq */}
        <div className="collapse collapse-arrow rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  bg-[#FFFFF5]  text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content font-normal text-sm text-[#343268] bg-white border-t border-[#DBDBDD]">
            <p className="pt-4">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        {/* 5th faq */}
        <div className="collapse collapse-arrow rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  bg-[#FFFFF5]  text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content font-normal text-sm text-[#343268]  bg-white border-t border-[#DBDBDD]">
            <p className="pt-4">
              Authoritatively aggregate standardized web-readiness rather than
              transparent materials. Professionally harness user-centric
              e-markets and principle-centered e-services. Energistically
              productivate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
