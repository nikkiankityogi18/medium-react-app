import { forthSectionData } from "../constants";

const ForthSection = () => {
  const { title, paraText, btnText } = forthSectionData;
  return (
    <div className="bg-darkGreen border-y-2 border-black">
      <div className="max-w-2xl m-auto px-10">
        <div className="flex flex-col justify-center items-center py-10">
          <h3 className="font-serif text-7xl text-center">{title}</h3>
          <p className="text-center my-6">{paraText}</p>
          <div className="border border-white text-white rounded-full px-4 py-2 my-4">
            <button>{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForthSection;
