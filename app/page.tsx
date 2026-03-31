
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <HeroSection />

      <Suspense fallback={
        <div className="wrapper flex items-center gap-2">
          Loading Featured Products...{" "}
          <LoaderIcon className="size-4 animate-spin" />
        </div>}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={
        <div className="wrapper flex items-center gap-2">
          Loading Recently Launched Products...{" "}
          <LoaderIcon className="size-4 animate-spin" />
        </div>}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}
