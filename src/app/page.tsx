import Hero from "@/components/landing/hero";
import { DefaultTopNav } from "@/components/nav/DefaultTopNav";
import DefaultFooter from "@/components/ui/footer/DefaultFooter";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen">
      <DefaultTopNav />

      <main className="flex flex-1 w-full mx-auto lg:max-w-5xl xl:max-w-7xl">
        <Hero />
      </main>

      <DefaultFooter />
    </div>
  );
}
