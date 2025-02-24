import {
  CalendarDaysIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import App from "../layouts/app";

const rentalDetails = {
  id: 1,
  name: "Luxury Condo in New York",
  images: [
    "https://source.unsplash.com/600x400/?apartment",
    "https://source.unsplash.com/600x400/?livingroom",
    "https://source.unsplash.com/600x400/?bedroom",
  ],
  location: "New York, USA",
  description:
    "Experience luxury living in the heart of New York City. This modern condo features stunning views, high-end furnishings, and top-tier amenities.",
  price: 2000,
  rate: "night",
  availableFrom: "Oct 1, 2022",
  availableTo: "Oct 10, 2022",
  rating: 4.8,
  reviews: [
    {
      user: "John Doe",
      comment: "An amazing place, would love to stay again!",
      rating: 5,
    },
    {
      user: "Jane Smith",
      comment: "Perfect location and comfortable space.",
      rating: 4.5,
    },
  ],
};

function AccomInfo() {
  return (
    <>
      <App>
        <div className="px-6 py-6 max-w-6xl mx-auto space-y-10">
          {/* Rental Title & Image Gallery */}

          <div className="text-sm text-gray-500">
            Home / Accommodations / {rentalDetails.name}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {rentalDetails.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {rentalDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Rental image ${index + 1}`}
                  className="rounded-xl object-cover w-full h-64 shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section - Details */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
              <p className="text-gray-600">{rentalDetails.description}</p>

              <div className="flex items-center space-x-2 text-gray-500">
                <MapPinIcon className="h-6 w-6 text-secondary" />
                <span>{rentalDetails.location}</span>
              </div>

              <div className="flex items-center space-x-2 text-yellow-500">
                <StarIcon className="h-5 w-5" />
                <span>{rentalDetails.rating} / 5.0</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CalendarDaysIcon className="h-5 w-5" />
                <span>
                  Available from {rentalDetails.availableFrom} to{" "}
                  {rentalDetails.availableTo}
                </span>
              </div>
            </div>

            {/* Right Section - Booking Form */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-lg space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Book This Accommodation
              </h2>
              <p className="text-3xl font-bold text-secondary">
                ${rentalDetails.price}
                <span className="text-sm font-normal text-gray-500">
                  /{rentalDetails.rate}
                </span>
              </p>

              {/* Booking Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg btn-primary text-white transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}

export default AccomInfo;
