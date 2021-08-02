import Image from "next/image";
import classNames from "classnames";
import services from "@json/service-banner.json";
import s from "@styles/banner.module.scss";

export default function Servicebanner() {
  return (
    <div className={`${classNames(s.serviceBanner)} p-20`}>
      <div className="container flex-col m-auto">
        <h3 className="text-center lg:text-4xl">
          Home loans are complicated. We make them simple
        </h3>
        <div className="services flex item-center justify-center my-12">
          {services.map((service, index) => (
            <div
              className="service items-center flex flex-col justify-center"
              key={index}
            >
              <Image
                src={service.image}
                height={100}
                width={170}
                className="m-5"
                alt={service.title}
                layout="fixed"
              />
              <h4 className="m-3 font-normal lg:text-2xl text-center">
                {service.title}
              </h4>
              <p className="m-2 font-light text-center">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
