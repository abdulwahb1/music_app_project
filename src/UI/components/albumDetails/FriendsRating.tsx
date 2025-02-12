import { ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FriendRating {
  id: string;
  username: string;
  avatar?: string;
  rating: number;
}

interface FriendsRatingsProps {
  ratings: FriendRating[];
  onViewAll?: () => void;
  className?: string;
}

export function FriendsRatings({
  ratings,
  onViewAll,
  className,
}: FriendsRatingsProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Friends Ratings</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onViewAll}
          className="text-gray-400 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="grid grid-cols-3 2xl:flex gap-2 2xl:gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
        {ratings.map((friend) => (
          <div
            key={friend.id}
            className="flex flex-col items-center gap-2 2xl:min-w-[80px]"
          >
            <Avatar className="2xl:h-[80px] 2xl:w-[80px]">
              <AvatarImage src={friend.avatar} />
              <AvatarFallback className="bg-zinc-800 text-white">
                {friend.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-white truncate max-w-[80px]">
                {friend.username}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < friend.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-600 text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
