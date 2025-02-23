import { useState } from "react";
import App from "../layouts/app";

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Products");
  const Marketplace = [
    {
      image: "path-to-image.jpg",
      title: "Marketplace, Shopping, Culture and free WiFi!",
      description: "All guests of the Urugo Eco-Lodge enjoy complimentary WiFi",
    },
    {
      image: "path-to-image.jpg",
      title: "Meetings, Special Marketplace & Weddings",
      description:
        "The center’s beautiful campus is the perfect venue to host your event",
    },
    {
      image: "path-to-image.jpg",
      title: "Spacious Safari Tents",
      description: "Relax and unwind in our spacious luxury safari tents!",
    },
  ];

  return (
    <App>
      <div className="px-20 py-10 space-y-28">
        {/* Marketplace Section */}

        <div className="flex justify-center">
          <div className="flex items-center justify-center space-x-4 border-2 border-orange-400 rounded-full px-4 py-2 w-full md:w-1/2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-gray-700 p-4 rounded-full focus:outline-none"
            >
              <option>Products</option>
              <option>Services</option>
              <option>Accommodation</option>
            </select>
            <input
              type="text"
              placeholder={`Search in ${category}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 rounded-full border-none focus:outline-none"
            />
            <button className="px-4 py-2 btn-primary rounded-full text-white hover:bg-orange-600 transition">
              Search
            </button>
          </div>
        </div>

        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {Marketplace.map((event, index) => (
              <div
                key={index}
                className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </App>
  );
}

export default Marketplace;
