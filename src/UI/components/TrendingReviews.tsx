import Image from "next/image";
import { Star, Heart, MessageSquare, Share2, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const reviews = [
  {
    id: 1,
    album: {
      title: "Planet Her",
      artist: "Doja Cat",
      type: "Album",
      cover: "/p1.jpg",
    },
    rating: 3,
    content:
      "Such a mixed bag, the songs are either great or horrible with no in-between. A definite step down, but the singles are at least more memorable (for better or for worse). This would probably be higher if it wasn't for how many hooks killed the songs.",
    user: {
      name: "k_k",
      avatar: "/placeholder.png",
      isPro: true,
    },
    stats: {
      likes: 16,
      comments: 21,
    },
    bestSongs: [
      "Get Into It (Yuh)",
      "Kiss Me More (with SZA)",
      "Need To Know",
      "Been Like This",
    ],
    worstSongs: ["Ohmah ohmah oomah", "You Right (with The Weeknd)", "Naked"],
  },
  // Add more reviews...
];

export function TrendingReviews() {
  return (
    <section className="">
      <h2 className="mb-4 text-xl font-bold text-white">Trending Reviews</h2>
      <div className="grid gap-3">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="bg-[#141414] text-white hover:bg-[#1A1A1A]"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                {/* Album Info */}
                <div className="relative aspect-square w-[60px] flex-none overflow-hidden rounded">
                  <Image
                    src={review.album.cover || "/placeholder.svg"}
                    alt={review.album.title}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{review.album.title}</h3>
                      <p className="text-sm text-gray-400">
                        {review.album.artist} • {review.album.type}
                      </p>
                      <div className="mt-1 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Review Content */}
                  <p className="text-sm text-gray-300">{review.content}</p>

                  {/* User Info & Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={review.user.avatar} />
                        <AvatarFallback>
                          {review.user.name[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {review.user.name}
                      </span>
                      {review.user.isPro && (
                        <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-xs font-medium text-blue-400">
                          PRO
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <button className="flex items-center gap-1 text-sm">
                        <Heart className="h-4 w-4" />
                        {review.stats.likes}
                      </button>
                      <button className="flex items-center gap-1 text-sm">
                        <MessageSquare className="h-4 w-4" />
                        {review.stats.comments}
                      </button>
                      <button className="text-sm">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
