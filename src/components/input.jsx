"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  const { data: session } = useSession();

  const [text, setText] = useState("");

  if (!session) return null;
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
      <div className="h-20">
        <Image
          loader={() => session.user.image}
          src={session.user.image}
          width={44}
          height={10}
          alt="user-img"
          className="rounded-full cursor-pointer hover:brightness-95"
        />
      </div>
      <div className="w-full divide-y divide-gray-200">
        <textarea
          className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700 "
          placeholder="Whats happening"
          rows="2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="flex items-center justify-between pt-2.5">
          <HiOutlinePhotograph
            onClick={() => imagePickRef.current.click()}
            className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
          />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}
