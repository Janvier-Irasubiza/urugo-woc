import App from "../layouts/app";
import { BriefcaseIcon } from "@heroicons/react/16/solid";

function Index() {
  const cards = [
    {
      title: "Urugo Women Opportunity Center",
      description:
        "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      title: "The Urugo Eco-Lodge",
      description:
        "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      title: "Women and Men Learning Space",
      description:
        "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
  ];

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
      <div className="px-20 py-6">
        <div className="border w-full h-[474px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xl">Hero Image Placeholder</span>
        </div>

        {/* Cards Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-thrd-level p-6 rounded-lg shadow-lg text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <BriefcaseIcon className="h-12 w-12 text-gray-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-green-700 mb-2 text-4xl">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-8 text-lg">{card.description}</p>
            </div>
          ))}
        </div>

        <section className="flex flex-col md:flex-row items-center gap-10 mt-20">
          {/* Images */}
          <div className="flex flex-col gap-4 w-full">
            <img
              src="path-to-image.jpg"
              alt="Hands Together"
              className="rounded-lg"
            />
            <img
              src="path-to-image.jpg"
              alt="Hands Together"
              className="rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8 w-full">
            <h2 className="text-4xl font-bold text-green-700">
              Supporting Women’s Economic Development
            </h2>
            <p className="text-gray-600 text-lg">
              By spending your money at the Urugo Women’s Opportunity Center,
              you are contributing to the social and economic development of
              local women and their communities. The Urugo Women’s Opportunity
              Center provides a secure, supportive environment where women can
              find support, access resources, and build life-changing skills to
              move from crisis and poverty to stability and economic
              self-reliance.
            </p>
            <button className="btn-primary text-white px-12 py-3 rounded-full hover:bg-orange-600">
              Donate
            </button>
          </div>
        </section>

        {/* Events Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-primary mb-6">Events</h2>
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

        {/* News & Updates Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-primary mb-6">
            News & Updates
          </h2>
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
                  <h3 className="text-lg font-semibold mb-2 text-2xl text-primary-dark">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline text-lg"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-primary mb-6">Partners</h2>
          <div className="flex items-center justify-between gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 h-16 w-32 flex items-center justify-center rounded-lg"
                >
                  <span className="text-gray-500 font-semibold">
                    Partners Logo
                  </span>
                </div>
              ))}
          </div>
        </section>
      </div>
    </App>
  );
}

export default Index;
