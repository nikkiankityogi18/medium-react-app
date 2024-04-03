import { fifthSectionData } from "../constants";

const FifthSection = () => {
  const {
    leftTitle,
    leftImgUrl,
    leftPara,
    rightTitle,
    rightImgUrl,
    rightPara,
  } = fifthSectionData;
  return (
    <div className="bg-darkGreen border-b-2 border-black">
      <div className="container m-auto">
        <div className="flex sm:flex-row flex-col ">
          <div className="flex flex-1 flex-col sm:items-start items-center sm:border-r-2 border-black py-6">
            <h3 className="sm:text-4xl text-2xl font-serif sm:text-start text-center">
              {leftTitle}
            </h3>
            <img
              className="h-full w-1/2 sm:my-6 my-3"
              src={leftImgUrl}
              alt="left-img"
            />
            <p className="sm:text-start text-center sm:py-6 py-3">{leftPara}</p>
          </div>
          <div className="flex flex-1 flex-col sm:ml-10 py-6 sm:items-start items-center">
            <h3 className="sm:text-4xl text-2xl sm:text-start text-center font-seri">
              {rightTitle}
            </h3>
            <img
              className="h-full w-1/2 sm:my-6 my-3"
              src={rightImgUrl}
              alt="left-img"
            />
            <p className="sm:text-start text-center sm:py-6 py-3">
              {rightPara}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthSection;
