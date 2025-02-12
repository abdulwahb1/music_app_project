"use client";

import { useParams } from "next/navigation";
import { popularAlbums } from "@/lib/sampleData";
import { AlbumHeader } from "@/UI/components/AlbumHeader";
import { AlbumNavigation } from "@/UI/components/AlbumNavigaton";
import Navbar from "@/UI/components/Navbar";

export default function AlbumPage() {
  const params = useParams(); // Params are always strings or arrays
  const id = params?.id as string; // Explicitly cast id as a string

  const album = popularAlbums.find((a) => a.id === Number(id));

  if (!album) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Album not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black mx-auto">
      <Navbar />
      <div className="">
        <AlbumHeader album={album} />
        <AlbumNavigation album={album} />
      </div>
      {/* Add other sections here */}
    </main>
  );
}
