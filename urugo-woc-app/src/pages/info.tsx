import App from "../layouts/app";

const eventDetails = {
  id: 1,
  title: "Dining, Shopping, Culture and Free WiFi!",
  image: "https://source.unsplash.com/800x400/?event",
  description:
    "All guests of the Urugo Eco-Lodge enjoy complimentary WiFi. Explore a blend of Rwandan culture, shopping experiences, and dining options in a tranquil eco-friendly environment.",
  date: "March 25, 2025",
  time: "10:00 AM - 5:00 PM",
  location: "Urugo Eco-Lodge, Kigali, Rwanda",
  author: "Event Team",
};

function EventDetails() {
  return (
    <>
      <App>
        <div className="px-6 py-10 max-w-4xl mx-auto space-y-8">
          {/* Event Image and Title */}
          <div className="space-y-4">
            <img
              src={eventDetails.image}
              alt={eventDetails.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <h1 className="text-4xl font-bold text-orange-600">
              {eventDetails.title}
            </h1>
          </div>

          {/* Event Metadata */}
          <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
            <span>Date: {eventDetails.date}</span>
            <span>Time: {eventDetails.time}</span>
            <span>Location: {eventDetails.location}</span>
            <span>By: {eventDetails.author}</span>
          </div>

          {/* Event Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About This Event</h2>
            <p className="text-gray-700 leading-relaxed">
              {eventDetails.description}
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition">
              Book Your Spot
            </button>
          </div>
        </div>
      </App>
    </>
  );
}

export default EventDetails;
