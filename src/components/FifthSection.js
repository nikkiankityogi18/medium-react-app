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
        <div className="flex ">
          <div className="flex flex-1 flex-col  border-r-2 border-black py-6">
            <h3 className="text-4xl font-serif">{leftTitle}</h3>
            <img
              className="h-full w-1/2 my-6"
              src={leftImgUrl}
              alt="left-img"
            />
            <p className="py-6">{leftPara}</p>
          </div>
          <div className="flex flex-1 flex-col ml-10 py-6">
            <h3 className="text-4xl font-serif">{rightTitle}</h3>
            <img
              className="h-full  w-1/2 my-6"
              src={rightImgUrl}
              alt="left-img"
            />
            <p className="py-6">{rightPara}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthSection;
