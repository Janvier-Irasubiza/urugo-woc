import App from "../layouts/app";

function Dining() {
  const Dining = [
    {
      image: "path-to-image.jpg",
      title: "Dining, Shopping, Culture and free WiFi!",
      description: "All guests of the Urugo Eco-Lodge enjoy complimentary WiFi",
    },
    {
      image: "path-to-image.jpg",
      title: "Meetings, Special Dining & Weddings",
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
        {/* Dining Section */}
        <section className="">
          <h2 className="text-3xl font-bold text-primary mb-6">African Dish</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {Dining.map((event, index) => (
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
          <h2 className="text-3xl font-bold text-primary mb-6">
            Kinyarwanda Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {Dining.map((event, index) => (
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
          <h2 className="text-3xl font-bold text-primary mb-6">
            African Tradition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {Dining.map((event, index) => (
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

export default Dining;
