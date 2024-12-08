import { DefaultTopNav } from "@/components/nav/DefaultTopNav";
import DefaultFooter from "@/components/ui/footer/DefaultFooter";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen">
      <DefaultTopNav />

      <main className="flex flex-1 "></main>

      <DefaultFooter />
    </div>
  );
}
