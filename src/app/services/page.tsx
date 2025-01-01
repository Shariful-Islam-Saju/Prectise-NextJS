export default function Service() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          We offer a wide range of services to cater to your needs. Explore our
          offerings below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800">Service One</h2>
            <p className="mt-2 text-gray-600">
              Detailed description of service one and its benefits.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800">Service Two</h2>
            <p className="mt-2 text-gray-600">
              Detailed description of service two and its benefits.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800">Service Three</h2>
            <p className="mt-2 text-gray-600">
              Detailed description of service three and its benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
