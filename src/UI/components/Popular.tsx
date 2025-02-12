import { popularAlbums } from "@/lib/sampleData";
import Image from "next/image";
import Link from "next/link";

export function PopularThisWeek() {
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl">
      <h2 className="mb-6 text-2xl font-bold text-white">Popular This Week</h2>
      <div className="grid grid-cols-3 2xl:flex gap-4 overflow-x-hidden pb-4">
        {popularAlbums.map((album) => (
          <Link
            key={album.id}
            href={`/album/${album.id}`}
            className="group flex-none"
          >
            <div className="relative bg-black aspect-square 2xl:w-48 overflow-hidden rounded-lg transition-transform duration-200 border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-lg">
              <Image
                src={album.cover || "/placeholder.svg"}
                alt={album.title}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="mt-2 ml-1 flex flex-col items-center 2xl:max-w-48">
              <h3 className="font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis 2xl:max-w-48 max-w-24">
                {album.title}
              </h3>
              <p className="text-sm text-gray-400">{album.artist}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
