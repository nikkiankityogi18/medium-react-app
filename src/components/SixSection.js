import { sixSectionData } from "../constants";

const SixSection = () => {
  const { title, para, mobileImg, iosIcon, andriodIcon } = sixSectionData;
  return (
    <div className="bg-lightGreen px-10">
      <div className="container m-auto">
        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-1 flex-col">
            <h3 className="lg:text-7xl sm:text-5xl text-4xl sm:text-start text-center sm:py-6 py-3 font-serif">
              {title}
            </h3>
            <p className="sm:py-6 py-3 sm:text-start text-center">{para}</p>
            <div className="flex sm:justify-start justify-center sm:py-6  py-3">
              <img
                className="sm:w-40 sm:h-14 w-32 h-10 px-6 py-2 bg-black mr-6 rounded-xl"
                src={iosIcon}
                alt="ios"
              />
              <img
                className="sm:w-40 sm:h-14 w-32 h-10 px-6 py-2 bg-black rounded-xl"
                src={andriodIcon}
                alt="andriod"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center sm:pt-16 pt-8 items-end ">
            <img
              className="object-contain h-80"
              src={mobileImg}
              alt="mobile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SixSection;
