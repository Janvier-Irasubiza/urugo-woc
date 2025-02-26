import { useEffect, useState } from "react";
import App from "../layouts/app";
import axios from "axios";

interface Accommodation {
  image: string;
  title: string;
  short_desc: string;
  type: string;
  active: boolean;
  available: boolean;
  time_frame: string;
  price: number;
  category: string;
}

function Accommodations() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const fetchAccommodations = async () => {
    try {
      // Fetch data from API using axios
      const response = await axios.get(
        "http://localhost:8000/api/listings/?type=accommodation"
      );
      setAccommodations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const familyRooms = accommodations.filter(
    (accommodation) => accommodation.category === "family"
  );
  const coupleRooms = accommodations.filter(
    (accommodation) => accommodation.category === "couple"
  );
  const singleRooms = accommodations.filter(
    (accommodation) => accommodation.category === "single"
  );

  return (
    <App>
      <div className="px-20 py-10 space-y-28">
        {/* Accommodations Section */}
        {familyRooms && familyRooms.length > 0 && (
          <section className="">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Family Rooms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {familyRooms.map((accom, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={accom.image}
                    alt={accom.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {accom.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{accom.short_desc}</p>
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

        {coupleRooms && coupleRooms.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">Couple</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {coupleRooms.map((accom, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={accom.image}
                    alt={accom.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {accom.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{accom.short_desc}</p>
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

        {singleRooms && singleRooms.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">Single</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {singleRooms.map((accom, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={accom.image}
                    alt={accom.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {accom.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{accom.short_desc}</p>
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

export default Accommodations;
