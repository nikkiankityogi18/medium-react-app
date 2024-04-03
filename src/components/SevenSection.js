import { sevenSectionData } from "../constants";

const SevenSection = () => {
  const {
    firstSectionMainTitle,
    firstSubTitle,
    firstPara,
    firstBtnText,
    secondSubTitle,
    secondPara,
    secondBtnText,
    secondSectionMainTitle,
    secondSectionBtnText,
    secondSectionImg,
  } = sevenSectionData;
  return (
    <div className="border-y-2 border-darkGray">
      <div className="flex border-y-2 border-darkGray">
        <div className="container m-auto">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-1 sm:border-r-2 border-darkGray">
              <h3 className="lg:text-7xl sm:text-5xl text-4xl font-serif mt-6 max-w-96 sm:text-start text-center sm:m-0 m-auto">
                {firstSectionMainTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="my-6 border-b-2 border-darkGray">
                <h3 className="font-serif sm:text-3xl text-2xl sm:pl-4 sm:text-start text-center">
                  {firstSubTitle}
                </h3>
                <p className="sm:pl-4 sm:text-start text-center">{firstPara}</p>
                <div className="flex sm:justify-start justify-center sm:mt-20 mt-8 mb-10 sm:pl-4">
                  <button className="py-2 px-6 font-medium border border-black rounded-3xl text-btnGreen">
                    {firstBtnText}
                  </button>
                </div>
              </div>
              <div className="my-6">
                <h3 className="font-serif text-3xl sm:pl-4 sm:text-start text-center">
                  {secondSubTitle}
                </h3>
                <p className="sm:pl-4 sm:text-start text-center">
                  {secondPara}
                </p>
                <div className="flex sm:justify-start justify-center sm:mt-20 mt-8 mb-10 sm:pl-4">
                  <button className="py-2 px-6 font-medium border border-black rounded-3xl text-btnGreen">
                    {secondBtnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-1 justify-center sm:border-r-2 border-darkGray py-2">
          <img
            className="h-96 object-contain"
            src={secondSectionImg}
            alt="cube-img"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="lg:text-7xl sm:text-5xl text-4xl sm:text-start text-center font-serif sm:ml-6 pt-6">
            {secondSectionMainTitle}
          </h3>
          <div className="flex sm:justify-start justify-center sm:mb-8 mb-4">
            <button className="bg-btnGreen text-white py-2 px-8 font-medium rounded-3xl ml-6 sm:mt-32 mt-8">
              {secondSectionBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SevenSection;
