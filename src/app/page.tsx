
export default async function Home() {

  return (
    <div className="bg-gray-100 min-h-[73vh]">
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
      <main className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800">Feature One</h2>
              <p className="mt-2 text-gray-600">
                Learn about our first amazing feature and how it can benefit
                you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800">Feature Two</h2>
              <p className="mt-2 text-gray-600">
                Discover the second feature that makes our app stand out.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800">
                Feature Three
              </h2>
              <p className="mt-2 text-gray-600">
                Check out our third feature and see what it has to offer.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
