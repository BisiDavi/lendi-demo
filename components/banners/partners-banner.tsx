import { Button } from "@components/.";

export default function PartnersBanner() {
  return (
    <div className="container bg-white p-20">
      <div className="text">
        <h2 className="text-center font-weight-bold">
          35+ Lenders means more choice and better rates
        </h2>
        <p className="font-light">
          Choosing from over 2,500 different home loan options means you can
          find the right loan for your individual needs. Plus, our experts will
          negotiate on your behalf to get you the best deal possible.
        </p>
        <Button className="mt-5" text="Compare More Lenders" />
      </div>
      <div className="icons"></div>
    </div>
  );
}
