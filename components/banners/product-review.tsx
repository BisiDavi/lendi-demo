import Image from "next/image";
import ProductReviews from "@json/reviews.json";
import Reviewcard from "@components/card/review-card";

export default function ProductReviewBanner() {
  return (
    <div className="product-review">
      <div className="flex flex-col m-auto justify-center items-center container px-30">
        <span className="mb-5 mt-8 mx-auto">
          <Image
            src="/product-review.png"
            alt="product-review"
            height={60}
            width={300}
          />
        </span>
        <h2 className="text-center text-3xl my-3 font-medium">
          4.6 stars from 2k+ reviews
        </h2>
        <div className="flex items-center m-auto justify-center">
          {ProductReviews.map((review, index) => (
            <Reviewcard key={index} data={review} />
          ))}
        </div>
      </div>
      <h6 className="text-center">All reviews</h6>
    </div>
  );
}
