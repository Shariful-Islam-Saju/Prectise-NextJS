import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = async () => {
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
          <div className={`block md:flex md:items-center md:space-x-6`}>
            <Link
              href="/"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              About
            </Link>

            <Link
              href="/api"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              Register
            </Link>

            <Link
              href="/api"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              Login
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
