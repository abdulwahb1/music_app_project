import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Album } from "@/types/album";

interface AlbumHeaderProps {
  album: Album;
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  return (
    <div className="flex lg:flex-row flex-col lg:items-start gap-6 lg:px-6 pt-6 lg:h-72 mx-auto max-w-5xl justify-center items-center">
      {/* Album Cover */}
      <Image
        src={album.cover || "/placeholder.svg"}
        alt={album.title}
        width={250}
        height={250}
        className="rounded-sm"
      />

      {/* Album Info */}
      <div className="flex lg:flex-1 lg:flex-row flex-col gap-8 h-full w-full pb-10 ">
        <div className="h-full lg:w-1/2 mx-auto">
          <div className="flex flex-col gap-2 h-full justify-end">
            <h1 className="mb-1 text-3xl font-bold text-white">
              {album.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>Album</span>
              <span>•</span>
              <span>{album.releaseDate}</span>
              <span>•</span>
              <span>{album.trackCount} Tracks</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Link href="#" className="text-sm text-white hover:underline">
                {album.artist}
              </Link>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-col gap-6 h-full lg:justify-end justify-center items-center lg:items-end lg:w-1/2">
          <div className="flex items-center gap-8 lg:ml-auto">
            <div>
              <div className="text-xl font-bold text-white">{album.rating}</div>
              <div className="text-xs text-gray-400">Total ratings</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-xl font-bold text-white">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {album.avgRating}
                <span className="text-sm font-normal text-gray-400">/ 5</span>
              </div>
              <div className="text-xs text-gray-400">Average rating</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-xl font-bold text-white">
                0<span className="text-sm font-normal text-gray-400">/ 5</span>
              </div>
              <div className="text-xs text-gray-400">Your rating</div>
            </div>
          </div>
          <Button className="w-fit bg-blue-500 px-12 text-sm font-bold hover:bg-blue-600">
            Sign up to rate this album
          </Button>
        </div>
        {/* CTA Button */}
      </div>
    </div>
  );
}
