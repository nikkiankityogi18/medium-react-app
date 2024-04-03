import { secondSectionData } from "../constants";

const SecondSection = () => {
  const { title, paraContent, listItem } = secondSectionData;
  return (
    <div className="flex flex-col justify-center py-10 bg-peach ">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col justify-center">
          <h3 className="lg:text-7xl sm:text-5xl text-4xl text-center font-medium font-serif">
            {title}
          </h3>
          <p className="max-w-xl mx-auto my-6 font-medium text-base text-center">
            {paraContent}
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="sm:flex hidden flex-wrap justify-between w-full h-full">
          {listItem.map((item, index) => (
            <div
              style={{ width: "30%" }}
              className={`flex mb-2 mx-2 border-x-0 border-t-black py-2  ${
                index === listItem.length - 3 ||
                index === listItem.length - 2 ||
                index === listItem.length - 1
                  ? "border"
                  : "border-b-0 border"
              }`}
            >
              <img
                className="w-10 h-10 rounded-full mr-4 object-cover"
                src={item.imgUrl}
                alt="person-img"
              />
              <p className="flex items-center justify-center text-xl font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="sm:hidden flex flex-wrap justify-between w-full h-full">
          {listItem.map((item, index) => (
            <div
              className={`flex mb-2 mx-2 border-x-0 border-t-black py-2 w-full  ${
                index === listItem.length - 1 ? "border" : "border-b-0 border"
              }`}
            >
              <img
                className="w-10 h-10 rounded-full mr-4 object-cover"
                src={item.imgUrl}
                alt="person-img"
              />
              <p className="flex items-center justify-center text-xl font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
