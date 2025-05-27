"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { useEffect, useState } from "react";
import TodoBoard from "./(components)/todo-board.page";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
export default async function Dashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

    const todoData = await db.select().from(todo);
    console.log("Fetched todo data:", todoData);

  useEffect(() => {
      setUserEmail(localStorage.getItem("doozyUserEmail"));
  }, []);

  return (
    <div className="h-[76dvh] w-full flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/doozy.png"
              alt="Doozy Logo"
              className="cursor-pointer"
              width={70}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {userEmail && (
            <span className="text-sm text-gray-600 font-mono">
              {userEmail.split("@")[0]}
            </span>
          )}
          <Link href="/">
            <Button variant="outline" className="cursor-pointer">
              Logout
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto my-8" style={{ margin: "2rem auto" }}>
          {/* Content goes here */}
          <TodoBoard />
        </div>
      </main>
      {/* Footer (copied from app/page.tsx) */}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-4 border-t border-gray-200">
        <p className="text-xs">Sahil Ambekar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Glow Consultancy Team</p>
      </footer>
    </div>
  );
}