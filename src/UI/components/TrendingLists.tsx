import Image from "next/image";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { lists } from "@/lib/listData";

export function TrendingLists() {
  return (
    <section className="h-full lg:px-2 ">
      <h2 className="mb-4 text-xl font-bold text-white">Trending Lists</h2>
      <div className="grid gap-3">
        {lists.map((list) => (
          <Card
            key={list.id}
            className="bg-[#141414] text-white hover:bg-[#1A1A1A]"
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Album Covers Grid */}
                <div className="grid grid-cols-2 gap-0.5">
                  {list.covers.map((cover, i) => (
                    <div
                      key={i}
                      className="relative aspect-square w-[40px] overflow-hidden"
                    >
                      <Image
                        src={cover || "/placeholder.svg"}
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex-1 space-y-2 text-ellipsis overflow-hidden">
                  {/* List Info */}
                  <div>
                    <h3 className="font-medium">{list.title}</h3>
                    <p className="text-sm text-gray-400">{list.description}</p>
                  </div>

                  {/* User Info & Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={list.user.avatar} />
                        <AvatarFallback>
                          {list.user.name[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {list.user.name}
                      </span>
                      {list.user.isPro && (
                        <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-xs font-medium text-blue-400">
                          PRO
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <button className="flex items-center gap-1 text-sm">
                        <Heart className="h-4 w-4" />
                        {list.stats.likes}
                      </button>
                      <button className="flex items-center gap-1 text-sm">
                        <MessageSquare className="h-4 w-4" />
                        {list.stats.comments}
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
