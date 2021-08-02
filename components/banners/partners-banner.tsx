import classNames from "classnames";
import { Button } from "@components/.";
import s from "@styles/button.module.scss";
import SvgIcon from "@components/icons/SvgIcon";

export default function PartnersBanner() {
  const icons = [
    "hsbc",
    "westpac",
    "amp",
    "commonwealthbank",
    "macquarie",
    "ing",
    "george",
    "anz",
  ];
  return (
    <div className="bg-white p-20">
      <div className="content container m-auto">
        <div className="layer flex justify-around">
          <div className="text w-2/4 mr-20">
            <h2 className="font-bold lg:text-3xl m-5 w-2/4 leading-7 text-left">
              35+ Lenders means more choice and better rates
            </h2>
            <p className="text-left font-light lg:text-xl leading-4">
              Choosing from over 2,500 different home loan options means you can
              find the right loan for your individual needs. Plus, our experts
              will negotiate on your behalf to get you the best deal possible.
            </p>
            <Button
              className={`${classNames(s.button, s.green)} mt-5`}
              text="Compare More Lenders"
            />
          </div>
          <div className="icons grid grid-cols-2 w-1/4">
            {icons.map((icon, index) => (
              <div className="icon mx-5 self-center" key={index}>
                <SvgIcon icon={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
