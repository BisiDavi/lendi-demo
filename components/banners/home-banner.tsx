import classNames from "classnames";
import Menu from "@components/menu";
import Button from "@components/button";
import b from "@styles/banner.module.scss";
import s from "@styles/button.module.scss";

export default function Banner() {
  const bottomText = [
    "$12+ billion settled home loans",
    "35+ Major Austrialian lenders",
    "Secure and confidential",
  ];
  return (
    <div className={` ${classNames(b.banner)} w-full relative`}>
      <Menu />
      <div className="hero-text m-auto items-center justify-center flex flex-col p-48">
        <h1 className="text-center text-white text-4xl leading-8 my-4 mx-auto font-medium">
          We&#39;re Australia&#39;s #1 Online Home Loan Platform
        </h1>
        <p className="text-center text-white text-xl my-1 font-normal">
          2+ million Aussies have used Lendi to compare rates. Apply online &
          settle faster
        </p>
        <div className="button-group m-auto my-4">
          <Button
            className={`${classNames(s.button, s.green)} rounded-lg p-6 m-5`}
            text="I want to Refinance"
          />
          <Button
            className={`${classNames(s.button, s.green)} rounded-lg p-6 m-5`}
            text="I want to Buy a Home"
          />
        </div>
      </div>
      <span className="absolute bottom-px h-20 flex items-center justify-center m-auto w-full">
        <div className="flex items-center justify-center m-auto  w-full justify-around">
          {bottomText.map((text, index) => (
            <p
              key={index}
              className="text-center text-white font-normal text-2xl"
            >
              {text}
            </p>
          ))}
        </div>
      </span>
    </div>
  );
}
