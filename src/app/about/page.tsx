export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our website! We are passionate about delivering the best
          services to our customers. Our mission is to innovate and inspire.
        </p>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600">
            To be a leading provider in our industry, consistently exceeding
            expectations and setting new benchmarks.
          </p>
          <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
          <p className="text-gray-600">
            We are a group of dedicated professionals driven by excellence and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
