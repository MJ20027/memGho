'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';
import { TextRevealCard } from './ui/text-reveal-card';

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <TextRevealCard text="Scroll over" revealText="FeedbackAnonymous ">
          FeedbackAnonymous
        </TextRevealCard> */}
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
          FeedbackAnonymous
        </a>
        {session ? (
          <>
            <span className="mr-4">
              {" "}
              USERNAME : {user.username}
            </span>
            {/* <Button
              onClick={() => signOut()}
              className="w-full md:w-auto bg-slate-100 text-black"
              variant="outline"
            >
              Logout
            </Button> */}
            <button
              onClick={() => signOut()}
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/sign-in">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Login
            </button>

            {/* <Button
              className="w-full md:w-auto bg-slate-100 text-black"
              variant={"outline"}
            >
              Login
            </Button> */}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
