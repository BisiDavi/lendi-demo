import { HomeBanner, ServiceBanner, PartnersBanner } from "../components/";

export default function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <ServiceBanner />
      <PartnersBanner />
    </div>
  );
}
