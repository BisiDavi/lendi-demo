import {
  HomeBanner,
  ServiceBanner,
  PartnersBanner,
  MethodologyBanner,
} from "../components/";

export default function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <ServiceBanner />
      <PartnersBanner />
      <MethodologyBanner />
    </div>
  );
}
