"use client";

import { Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center gap-4 px-4 text-white max-w-5xl mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
          <span className="text-sm font-semibold">M</span>
        </div>
      </Link>

      {/* Search */}
      <div className="relative max-w-md flex-1">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Musicboard..."
          className="w-full bg-[#2C2C2C] pl-8 text-sm text-white placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden items-center gap-6 md:flex">
        <Link href="/music" className="text-sm hover:text-blue-400">
          Music
        </Link>
        <Link href="/members" className="text-sm hover:text-blue-400">
          Members
        </Link>
        <Link href="/lists" className="text-sm hover:text-blue-400">
          Lists
        </Link>
        <Link href="/pro" className="text-sm text-blue-400 hover:text-blue-300">
          Pro
        </Link>
      </div>

      {/* More Menu (mobile) */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => {}}
      >
        <span className="sr-only">Open menu</span>
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
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </Button>

      {/* Auth Buttons */}
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <Button
          variant="ghost"
          className="text-sm hover:bg-transparent hover:text-blue-400"
        >
          Log In
        </Button>
        <Button className="bg-blue-500 text-sm hover:bg-blue-600">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
