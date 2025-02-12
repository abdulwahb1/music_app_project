import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartComponent } from "./RatingChart";

function SeparatorLine() {
  return <Separator className="opacity-50" />;
}

const AlbumInformation = () => {
  return (
    <Card className="bg-zinc-800/50 p-4 mt-10 border-none">
      <h3 className="mb-4 text-sm font-medium text-white">Information</h3>
      {/* Rating Distribution */}
      <div className="mb-4 w-full bg-zinc-900">
        <ChartComponent />
      </div>
      <div className="space-y-4 text-sm">
        <SeparatorLine />
        <div>
          <div className="text-gray-400">Release Date</div>
          <div className="text-white">January 31, 2025</div>
        </div>
        <SeparatorLine />
        <div>
          <div className="text-gray-400">Duration</div>
          <div className="text-white">1 hour 24 min 49 sec</div>
        </div>
        <SeparatorLine />
        <div>
          <div className="text-gray-400">Label</div>
          <div className="text-white">XO / Republic Records</div>
        </div>
        <SeparatorLine />
        <div>
          <div className="text-gray-400">Explicit Lyrics</div>
          <div className="text-white">Yes</div>
        </div>
        <SeparatorLine />
        <div>
          <div className="text-gray-400">Genres</div>
          <div className="flex flex-wrap gap-1">
            {["Pop", "R&B/Hip Hop", "R&B", "Electronic", "Soul/Funk"].map(
              (genre) => (
                <span
                  key={genre}
                  className="text-blue-400 hover:text-blue-300 hover:underline cursor-pointer text-xs"
                >
                  {genre}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AlbumInformation;
