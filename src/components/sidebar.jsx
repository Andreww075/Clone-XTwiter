"use client";

import { FaXTwitter } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col p-3 justify-between h-screen">
      <div className="flex flex-col gap-4">
        <Link href="/">
          <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition duration-200 " />
        </Link>

        <Link
          href="/"
          className="flex items-center p-3 hover:bg-gray-100 rounded-full transition duration-200 gap-2 w-fit"
        >
          <AiFillHome className="w-7 h-7" />
          <span className="font-bold hidden lg:inline">Home</span>
        </Link>

        {session ? (
          <button
            onClick={signOut}
            className="bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={signIn}
            className="bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold"
          >
            Sign In
          </button>
        )}
      </div>

      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <Image
            loader={() => session.user.image}
            src={session.user.image}
            width={35}
            height={35}
            alt="user-img"
            className="rounded-full xl:mr-2"
          />
          <div className="hidden xl:inline">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-gray-500">@{session.user.username}</p>
          </div>
          <FaCheck className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  );
}
