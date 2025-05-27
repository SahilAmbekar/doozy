import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const t = await getTranslations("HomePage");

  const todoData = await db.select().from(todo);
  console.log("Fetched todo data:", todoData);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] p-4 items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] p-8]">
      <main className="flex flex-col items-center row-start-2">
        <Image
          className="dark:invert"
          src="/doozy-logo.svg"
          alt="doozy logo a todo app"
          width={180}
          height={38}
          priority
        />
        <ol
          className="list-inside text-sm/6 pt-[4rem] text-center sm:text-left mb-[10rem]"
        >
          <li className="mb-2 tracking-[-.01em]">
            {t("headlineOne")}
          </li>
          <li className="tracking-[-.01em]">
            {t("headlineTwo")}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-6 sm:h-7 px-3 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={"/signup"}
          >
            signUP
          </Link>
          <Link
            href={"/signin"}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-6 sm:h-7 px-3 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            signIN
          </Link>
          <Link
            href={"/dashboard"}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-6 sm:h-7 px-3 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            dashboard
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-xs">Sahil Ambekar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Glow Consultancy Team</p>
      </footer>
    </div>
  );
}
