
import BenefSection from "@/components/landing/benef";
import CopySection from "@/components/landing/copy";
import Hero from "@/components/landing/hero";
import QandA from "@/components/landing/qanda";
import { DefaultTopNav } from "@/components/nav/DefaultTopNav";
import DefaultFooter from "@/components/ui/footer/DefaultFooter";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen">
      <DefaultTopNav />

      <main className="flex flex-col flex-1 w-screen">
        <Hero />

        <BenefSection />

        <QandA />

        <CopySection />
      </main>

      <DefaultFooter />
    </div>
  );
}
