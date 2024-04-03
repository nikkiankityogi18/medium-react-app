import { sixSectionData } from "../constants";

const SixSection = () => {
  const { title, para, mobileImg, iosIcon, andriodIcon } = sixSectionData;
  return (
    <div className="bg-lightGreen px-10">
      <div className="container m-auto">
        <div className="flex">
          <div className="flex flex-1 flex-col">
            <h3 className="text-7xl py-6 font-serif">{title}</h3>
            <p className="py-6">{para}</p>
            <div className="flex py-6">
              <img
                className="w-40 h-14 px-6 py-2 bg-black mr-6 rounded-xl"
                src={iosIcon}
                alt="ios"
              />
              <img
                className="w-40 h-14 px-6 py-2 bg-black rounded-xl"
                src={andriodIcon}
                alt="andriod"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center pt-16 items-end ">
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
