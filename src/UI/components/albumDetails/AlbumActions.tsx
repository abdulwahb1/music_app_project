import { Button } from "@/components/ui/button";

import { PenLine, Clock, ListMusic, Share2, PlayCircle } from "lucide-react";

export function AlbumActions() {
  return (
    <div className="space-y-8">
      {/* Action Buttons */}
      <div className="space-y-2">
        <Button
          variant="secondary"
          className="w-full justify-start bg-zinc-800 text-white hover:bg-zinc-700"
        >
          <PenLine className="mr-2 h-4 w-4" />
          Write review
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <Clock className="mr-2 h-4 w-4" />
          Add to Listen Later
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <ListMusic className="mr-2 h-4 w-4" />
          Add album to a list
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Send on Musicboard
        </Button>
        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:bg-white/5 hover:text-white"
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            Listen on Streaming
          </Button>
        </div>
      </div>

      {/* Information */}
    </div>
  );
}
