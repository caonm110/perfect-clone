import SiteHeader from "@/components/landing/SiteHeader";
import HeroBanner from "@/components/landing/HeroBanner";
import AdvantageBlock from "@/components/landing/AdvantageBlock";
import NoticeBar from "@/components/landing/NoticeBar";
import PlatformCard from "@/components/landing/PlatformCard";
import SiteFooter from "@/components/landing/SiteFooter";
import SideContact from "@/components/landing/SideContact";
import { platforms } from "@/data/platforms";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />
      <AdvantageBlock />
      <NoticeBar />

      <main id="platforms" className="container mt-8 space-y-6">
        {platforms.map((p) => (
          <PlatformCard key={p.id} p={p} />
        ))}
      </main>

      <SiteFooter />
      <SideContact />
    </div>
  );
};

export default Index;
