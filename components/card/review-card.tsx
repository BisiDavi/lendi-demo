import displayRating from "@components/icons/rating";
import s from "@styles/card.module.scss";

export default function Reviewcard({ data }) {
  return (
    <div className={`${s.reviewCard} p-2 flex flex-col w-1/3 m-5`}>
      {displayRating(data.rating)}
      <h5 className="text-xl font-medium my-2">{data.title}</h5>
      <p className="mb-4">{data.text}</p>
      <div className="author">
        <div className="row flex">
          <span className="mr-2 font-bold">{data.author},</span>
          <p>{data.location}</p>
        </div>
        <div className="row">
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
}
