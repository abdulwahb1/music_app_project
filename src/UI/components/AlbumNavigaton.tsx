"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tracklist } from "./albumDetails/Tracklist";
import { AlbumActions } from "./albumDetails/AlbumActions";
import { Album } from "@/types/album";
import AlbumInformation from "./albumDetails/AlbumInformation";
import { TrendingReviews } from "./TrendingReviews";
import { FriendsRatings } from "./albumDetails/FriendsRating";
import { sampleFriendRatings } from "@/lib/sampleFriendData";
import { FilterSection } from "./albumDetails/FilterSection";
import { filterList, filterRatings, filterReview } from "@/lib/FilterOptions";
import { TrendingLists } from "./TrendingLists";

interface AlbumHeaderProps {
  album: Album;
}

function HomeTab({ album }: AlbumHeaderProps) {
  return (
    <div className="mt-6 flex lg:flex-row flex-col gap-6">
      <div className="flex-[2] mx-auto">
        <div className="block lg:hidden justify-center">
          <AlbumActions />
        </div>
        <Tracklist tracks={album?.tracks} />
        <div className="flex lg:hidden justify-center">
          <AlbumInformation />
        </div>
        <div className="my-12">
          <FriendsRatings
            ratings={sampleFriendRatings}
            onViewAll={() => console.log("View all clicked")}
          />
        </div>
        <TrendingReviews />
      </div>
      <div className="flex-1 hidden lg:block">
        <AlbumActions />
        <div className="hidden lg:flex">
          <AlbumInformation />
        </div>
      </div>
    </div>
  );
}

function ReviewsTab() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handleFilterChange = (sectionId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const sectionFilters = prev[sectionId] || [];
      const updatedFilters = sectionFilters.includes(optionId)
        ? sectionFilters.filter((id) => id !== optionId)
        : [...sectionFilters, optionId];

      return {
        ...prev,
        [sectionId]: updatedFilters,
      };
    });
  };

  return (
    <div className="mt-6 flex flex-col lg:flex-row  gap-6">
      <div className="block lg:hidden">
        <FilterSection
          sections={filterReview}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex-[2]">
        <TrendingReviews />
      </div>
      <div className="hidden flex-1 lg:block">
        <FilterSection
          sections={filterReview}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

function ListsTab() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handleFilterChange = (sectionId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const sectionFilters = prev[sectionId] || [];
      const updatedFilters = sectionFilters.includes(optionId)
        ? sectionFilters.filter((id) => id !== optionId)
        : [...sectionFilters, optionId];

      return {
        ...prev,
        [sectionId]: updatedFilters,
      };
    });
  };
  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      <div className="block lg:hidden">
        <FilterSection
          sections={filterReview}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex-[2]">
        <TrendingLists />
      </div>
      <div className="hidden flex-1 lg:block">
        <FilterSection
          sections={filterList}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

function RatingsTab() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handleFilterChange = (sectionId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const sectionFilters = prev[sectionId] || [];
      const updatedFilters = sectionFilters.includes(optionId)
        ? sectionFilters.filter((id) => id !== optionId)
        : [...sectionFilters, optionId];

      return {
        ...prev,
        [sectionId]: updatedFilters,
      };
    });
  };
  return (
    <div className="mt-6 flex lg:flex-row flex-col gap-6">
      <div className="block lg:hidden">
        <FilterSection
          sections={filterReview}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex-[2]">
        <FriendsRatings
          ratings={sampleFriendRatings}
          onViewAll={() => console.log("View all clicked")}
        />
      </div>
      <div className="hidden flex-1 lg:block">
        <FilterSection
          sections={filterRatings}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export function AlbumNavigation({ album }: AlbumHeaderProps) {
  const [activeTab, setActiveTab] = useState("home");
  const tabs = [
    { name: "Home", key: "home", component: <HomeTab album={album} /> },
    { name: "Reviews", key: "reviews", component: <ReviewsTab /> },
    { name: "Lists", key: "lists", component: <ListsTab /> },
    { name: "Ratings", key: "ratings", component: <RatingsTab /> },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      {/* Navigation Bar */}
      <nav className="border-b border-zinc-800">
        <div className="flex gap-6 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "border-b-2 py-3 text-sm font-medium focus:outline-none",
                activeTab === tab.key
                  ? "border-blue-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="p-3">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
}
