'use client';

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const ButtonSign = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center my-5">
      {session ? (
        <button
          onClick={signOut}
          className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md inline xl:hidden font-semibold"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md inline xl:hidden font-semibold"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default ButtonSign;
