import {
  HomeBanner,
  ServiceBanner,
  PartnersBanner,
  MethodologyBanner,
  ProductReviewBanner,
  HelpBanner,
  Footer,
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
      <Footer />
    </div>
  );
}
