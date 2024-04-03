import { thirdSectionData } from "../constants";

const ThirdSection = () => {
  const {
    firstSectionTitle,
    firstSectionPara,
    firstSectionName,
    secondSecitonTitle,
    secondSectionPara,
    btnText,
  } = thirdSectionData;
  return (
    <div className="bg-black  border-t-2 border-white">
      <div className="container m-auto">
        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-1 font-serif sm:border-r-2 border-white">
            <p className="lg:text-7xl sm:text-5xl text-4xl text-white py-10 sm:text-start text-center">
              {" "}
              {firstSectionTitle}
            </p>
          </div>
          <div className="flex flex-col flex-1 m-8">
            <div className="flex sm:justify-start justify-center">
              <img className="" src="/img/third-section-img.png" alt="demo" />
            </div>
            <div className="flex flex-col text-white mt-10">
              <p>"{firstSectionPara}"</p>
              <p className="mt-6 font-serif">{firstSectionName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white">
        <div className="max-w-5xl m-auto">
          <h3 className="lg:text-7xl sm:text-5xl text-4xl text-white text-center font-serif my-10">
            {secondSecitonTitle}
          </h3>
          <p className="mt-6 text-white text-center max-w-lg sm:m-auto sm:mx-auto mx-8">
            {secondSectionPara}
          </p>
          <div className="flex justify-center py-10 font-medium">
            <button className="text-btnGreen text-center px-4 py-2 border border-btnGreen rounded-full">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
