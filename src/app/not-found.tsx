import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "404 : Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className=" min-h-screen flex items-center justify-center px-4 bg-amber-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900  mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="text-black  flex justify-center mt-10 ">
          <button className="cursor-pointer">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
