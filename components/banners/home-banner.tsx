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
    <div className={` ${classNames(b.banner)} banner w-full`}>
      <Menu />
      <div className="hero-text m-auto">
        <h1>We&#39;re Australia&#39;s #1 Online Home Loan Platform</h1>
        <p>
          2+ million Aussies have used Lendi to compare rates. Apply online &
          settle faster
        </p>
        <div className="button-group m-auto">
          <Button
            className={`${classNames(s.button, s.green)} p-8 m-5`}
            text="I want to Refinance"
          />
          <Button
            className={`${classNames(s.button, s.green)} p-8 m-5`}
            text="I want to Buy a Home"
          />
        </div>
      </div>
      <div className="bottom-text flex items-center justify-around">
        {bottomText.map((text, index) => (
          <p key={index} className="text-center text-white">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
