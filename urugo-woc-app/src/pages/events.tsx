import App from "../layouts/app";

function Events() {
  const events = [
    {
      image: "path-to-image.jpg",
      title: "Dining, Shopping, Culture and free WiFi!",
      description: "All guests of the Urugo Eco-Lodge enjoy complimentary WiFi",
    },
    {
      image: "path-to-image.jpg",
      title: "Meetings, Special Events & Weddings",
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
        <section>
          <h1 className="mb-4 text-3xl font-bold text-primary">
            Happening Now
          </h1>
          <div className="border w-full h-[352px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">
              Hero Image Placeholder
            </span>
          </div>
        </section>

        {/* Events Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-6">Upcoming</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {events.map((event, index) => (
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

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-6">Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {events.map((event, index) => (
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

export default Events;
