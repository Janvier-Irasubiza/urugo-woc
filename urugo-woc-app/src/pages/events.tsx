import { useEffect, useState } from "react";
import App from "../layouts/app";
import axios from "axios";

interface Post {
  title: string;
  description: string;
  image: string;
  type: string;
  status: string;
}
[];

function Events() {
  const [events, setEvents] = useState<Post[]>([]);
  const fetchEvents = async () => {
    try {
      // Fetch data from API using axios
      const response = await axios.get(
        "http://localhost:8000/api/blog-posts/?type=event"
      );
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const happeningNow = events.filter((event) => event.status === "happening");
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const archivedEvents = events.filter((event) => event.status === "archived");

  return (
    <App>
      <div className="px-20 py-10 space-y-28">
        {happeningNow && happeningNow.length > 0 && (
          <section>
            <h1 className="mb-4 text-3xl font-bold text-primary">
              Happening Now
            </h1>
            {happeningNow.map((event, index) => (
              <div
                key={index}
                className="border w-full h-[352px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center"
              >
                <img src={event.image} alt="" />
              </div>
            ))}
          </section>
        )}

        {/* Events Section */}
        {upcomingEvents && upcomingEvents.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">Upcoming</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover"
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
        )}

        {/* Archive Section */}
        {archivedEvents && archivedEvents.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">Archive</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {archivedEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover"
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
        )}
      </div>
    </App>
  );
}

export default Events;
