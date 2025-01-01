/* eslint-disable @typescript-eslint/no-unused-vars */
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React from "react";

const Dashboard = ({
  user,
}: {
  user: KindeUser<Record<string, undefined>> | undefined;
}) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-4 py-5 text-lg font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 mt-6 px-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
              >
                <span>🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
              >
                <span>📊</span>
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
              >
                <span>⚙️</span>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-4 py-4 border-t border-gray-700">
          <button className="w-full bg-red-500 hover:bg-red-600 text-sm py-2 px-4 rounded-md">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        {/* Top Navbar */}
        <header className="bg-white shadow-md">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">
              Welcome to the Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-md text-gray-800"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Add New
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">Total Users</h2>
              <p className="mt-2 text-3xl font-bold text-blue-500">1,234</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">
                Monthly Revenue
              </h2>
              <p className="mt-2 text-3xl font-bold text-green-500">$12,345</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">New Orders</h2>
              <p className="mt-2 text-3xl font-bold text-yellow-500">678</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
