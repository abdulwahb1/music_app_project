import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

export default function Hero() {
  const albums = [
    { id: 1, position: "top-20 left-40" },
    { id: 2, position: "top-40 right-48" },
    { id: 3, position: "bottom-32 left-32" },
    { id: 4, position: "bottom-20 right-40" },
    { id: 5, position: "top-60 left-20" },
    { id: 6, position: "top-1/2 right-24" },
  ];

  return (
    <div className="relative min-h-[600px] overflow-hidden  px-4 py-20">
      {/* Floating Albums */}
      {albums.map((album) => (
        <div
          key={album.id}
          className={`absolute ${album.position} animate-float`}
        >
          <div className="h-16 w-16 rotate-12 rounded-lg bg-white/10 shadow-lg">
            <Image
              src={`/p${album.id}.jpg`}
              alt="Album cover"
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="mb-6 space-y-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
          <p>Review your favorite albums.</p>
          <p>Catalog all music you listen to.</p>
          <p>Share your passion for music.</p>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Musicboard is a social platform that allows you to keep track of all
          the music you listen to and grow your passion for music with friends.
          Write reviews, rate albums, and compile lists in music&apos;s fastest
          growing community.
        </p>

        <Button
          size="lg"
          className="mb-12 bg-blue-500 hover:bg-blue-600 font-bold text-lg p-7"
        >
          Join Musicboard for free!
        </Button>

        <div className="flex items-center justify-center space-x-4">
          <p className="text-sm text-gray-400">
            For music lovers. Download the app now on
          </p>
          <div className="flex items-center justify-center">
            {/* App Store */}
            <FaApple className="text-white text-xl hover:text-gray-500 cursor-pointer" />
            {/* Google Play */}
            <IoLogoAndroid className="text-white text-2xl hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
