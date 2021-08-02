import Image from "next/image";
import helpLinks from "@json/help.json";

export default function HelpBanner() {
  return (
    <div className="help-banner flex flex-col p-20">
      <h3 className="text-center text-3xl font-bold mb-5">
        We&#39;re here to help
      </h3>
      <p className="text-center text-lg mb-5">
        Our experts will help you search, choose and settle your home loan
        online. Chat to one of our Home Loan Specialists at a time that suits
        you.
      </p>
      <div className="m-auto flex items-center justify-around my-6 container">
        {helpLinks.map((help, index) => (
          <div className="m-3 mx-16 flex flex-col" key={index}>
            <Image
              src={help.image}
              height={150}
              width={150}
              alt={help.text}
              layout="fixed"
            />
            <h3 className="text-center mt-4 font-bold text-lg">{help.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
