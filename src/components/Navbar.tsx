import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { findUser } from "@/utils/getUser";

const Navbar = async () => {
  const user = await findUser();
  return (
    <nav className="bg-white shadow-md mb-4">
      <MaxWidthWrapper>
        <div className="container mx-auto py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Shariful Islam
          </Link>

          {/* Navbar Links */}
          <div
            className={`block
             md:flex md:items-center md:space-x-6`}
          >
            <Link
              href="/"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              Home
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Dashboard
              </Link>
            )}

            <Link
              href="/about"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              About
            </Link>
            {!user && (
              <Link
                href="/api/auth/register"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Register
              </Link>
            )}
            {!user && (
              <Link
                href="/api/auth/login"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Login
              </Link>
            )}

            {user && (
              <Link
                href="/api/auth/logout"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
