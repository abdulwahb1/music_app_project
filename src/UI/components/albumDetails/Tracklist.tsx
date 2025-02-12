import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Track } from "@/types/album";

interface TracklistProps {
  tracks: Track[];
}

export function Tracklist({ tracks }: TracklistProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-lg font-semibold text-white">Tracklist</h2>
        <Button variant="ghost" size="sm" className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </div>
      <div className="space-y-1">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-2 hover:bg-white/5"
          >
            <span className="w-6 text-sm text-gray-400">{index}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full p-0 text-gray-400 hover:text-white"
            >
              <Play className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                {track.title}
              </div>
              <div className="text-xs text-gray-400">{track.title}</div>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-sm text-gray-400">{track.duration}</span>
              <div className="flex items-center gap-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-white">
                  {track.rating}
                  <span className="text-gray-400">/5</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
