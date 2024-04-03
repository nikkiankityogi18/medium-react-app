import { heroSectionData } from "../constants";
const HeroSection = () => {
  const { firstParaText, secondPara, imgUrl } = heroSectionData;
  return (
    <div className="border-b-2 border-black">
      <div className="flex items-center justify-center lg:text-7xl sm:text-5xl text-4xl py-20 font-serif border-b-2 border-black">
        <h3 className="text-center">
          Every idea needs a <span className="font-semibold pl-4"> Medium</span>
        </h3>
      </div>
      <div className="container m-auto">
        <div className="flex sm:flex-row flex-col-reverse">
          <div className="flex flex-col flex-1 mx-6 text-base py-10">
            <p className="text-center mb-4">{firstParaText}</p>
            <p className="text-center">{secondPara}</p>
          </div>
          <div className="flex flex-1 py-10 justify-center items-center sm:border-l-2 border-black">
            <img className="h-72" src={imgUrl} alt="sphare" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
