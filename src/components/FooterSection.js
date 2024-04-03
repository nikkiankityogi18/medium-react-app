import { footerData } from "../constants";

const FooterSection = () => {
  const { mainTitle, listItems } = footerData;
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <h3 className="text-4xl font-bold font-serif">{mainTitle}</h3>
        <div className="mt-6">
          {listItems.map((item) => (
            <span className="ml-4 underline">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
