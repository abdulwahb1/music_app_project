"use client";

import { Search, Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center gap-4 2xl:px-4 text-white max-w-sm lg:max-w-5xl mx-auto">
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

      {/* Desktop Navigation Links */}
      <div className="hidden items-center gap-6 lg:flex">
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

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#1E1E1E] text-white">
          <div className="flex flex-col gap-6 mt-6">
            <Link href="/music" className="text-lg hover:text-blue-400">
              Music
            </Link>
            <Link href="/members" className="text-lg hover:text-blue-400">
              Members
            </Link>
            <Link href="/lists" className="text-lg hover:text-blue-400">
              Lists
            </Link>
            <Link
              href="/pro"
              className="text-lg text-blue-400 hover:text-blue-300"
            >
              Pro
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Auth Buttons */}
      <div className="ml-auto hidden items-center gap-2 lg:flex">
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
