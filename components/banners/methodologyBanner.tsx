import Image from "next/image";
import methodology from "@json/methodology.json";
import classNames from "classnames";
import Button from "@components/button";
import s from "@styles/banner.module.scss";
import b from "@styles/button.module.scss";

export default function MethodologyBanner() {
  return (
    <div className={`${classNames(s.methodologyBanner)} p-20`}>
      <div className="content flex items-center m-auto justify-center">
        <Image
          src="/file.png"
          alt="How lendi works"
          height={400}
          width={500}
          layout="fixed"
        />
        <div className="text">
          <h3 className="text-left font-bold lg:text-4xl">How Lendi works</h3>
          <div className="list">
            {methodology.map((list, index) => (
              <div className="list flex items-center my-5" key={index}>
                <div className="number font-bold rounded-full p-4 h-12 w-12 flex items-center justify-center mr-5 bg-white">
                  {index + 1}
                </div>
                <div className="text flex flex-col">
                  <h6 className="font-medium lg:text-xl my-2">{list.title}</h6>
                  <p className="font-light text-lg">{list.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            className={`${classNames(
              b.button,
              b.green
            )} rounded-full py-2 px-10 flex items-center`}
            text="Get Started"
          />
        </div>
      </div>
    </div>
  );
}
