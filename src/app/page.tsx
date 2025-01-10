import Users from "@/components/Users";


export default async function Home() {

  return (
    <div className="bg-gray-100 min-h-[70vh]">
      {/* Hero Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to the Home Page
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore the amazing features of this application and make your
            experience delightful.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Users />
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
