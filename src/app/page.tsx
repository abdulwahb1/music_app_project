import { Features } from "@/UI/components/Features";
import Hero from "@/UI/components/Hero";
import Navbar from "@/UI/components/Navbar";
import { PopularThisWeek } from "@/UI/components/Popular";
import { TrendingLists } from "@/UI/components/TrendingLists";
import { TrendingReviews } from "@/UI/components/TrendingReviews";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0a0f14] to-[#12171c] 2xl:w-full min-h-screen flex flex-col">
      <div className="bg-[#1C1C1C] ">
        <Navbar />
      </div>
      <Hero />
      <PopularThisWeek />
      <Features />
      <div className="flex flex-col gap-2 2xl:gap-6 px-6 py-6 lg:flex-row max-w-7xl mx-auto">
        <div className="flex-[4]">
          <TrendingReviews />
        </div>
        <div className="flex-[2]">
          <TrendingLists />
        </div>
      </div>
    </div>
  );
}
