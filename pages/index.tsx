import {
  HomeBanner,
  ServiceBanner,
  PartnersBanner,
  MethodologyBanner,
  ProductReviewBanner,
  HelpBanner,
} from "../components/";

export default function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <ServiceBanner />
      <PartnersBanner />
      <MethodologyBanner />
      <ProductReviewBanner />
      <HelpBanner />
    </div>
  );
}
