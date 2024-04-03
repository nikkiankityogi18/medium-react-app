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
          <div className="flex">
            <div className="flex flex-1 border-r-2 border-darkGray">
              <h3 className="text-7xl font-serif mt-6 max-w-96">
                {firstSectionMainTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="my-6 border-b-2 border-darkGray">
                <h3 className="font-serif text-3xl pl-4">{firstSubTitle}</h3>
                <p className="pl-4">{firstPara}</p>
                <div className="mt-20 mb-10 pl-4">
                  <button className="py-2 px-6 font-medium border border-black rounded-3xl text-btnGreen">
                    {firstBtnText}
                  </button>
                </div>
              </div>
              <div className="my-6">
                <h3 className="font-serif text-3xl pl-4">{secondSubTitle}</h3>
                <p className="pl-4">{secondPara}</p>
                <div className="mt-20 mb-10 pl-4">
                  <button className="py-2 px-6 font-medium border border-black rounded-3xl text-btnGreen">
                    {secondBtnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1 justify-center border-r-2 border-darkGray py-2">
          <img
            className="h-96 object-contain"
            src={secondSectionImg}
            alt="cube-img"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-7xl font-serif ml-6 pt-10">
            {secondSectionMainTitle}
          </h3>
          <div>
            <button className="bg-btnGreen text-white py-2 px-8 font-medium rounded-3xl ml-6 mt-32">
              {secondSectionBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SevenSection;
