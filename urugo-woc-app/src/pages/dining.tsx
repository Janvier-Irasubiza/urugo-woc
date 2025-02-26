import { useEffect, useState } from "react";
import App from "../layouts/app";
import axios from "axios";

interface Dining {
  image: string;
  title: string;
  short_desc: string;
  category: string;
  location: string;
}

function Dining() {
  const [Dining, setDining] = useState<Dining[]>([]);

  const fetchDinings = async () => {
    try {
      // Fetch data from API using axios
      const response = await axios.get("http://localhost:8000/api/dining/");
      console.log(response.data);
      setDining(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDinings();
  }, []);

  const AfricanDish = Dining.filter(
    (dining) => dining.category === "african_dish"
  );
  const KinyarwandaFood = Dining.filter(
    (dining) => dining.category === "kinyarwanda_dish"
  );
  const AfricanTradition = Dining.filter(
    (dining) => dining.category === "african_tradition"
  );

  return (
    <App>
      <div className="px-20 py-10 space-y-28">
        {/* Dining Section */}

        {AfricanDish && AfricanDish.length > 0 && (
          <section className="">
            <h2 className="text-3xl font-bold text-primary mb-6">
              African Dish
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {AfricanDish.map((dining, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={dining.image}
                    alt={dining.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {dining.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{dining.short_desc}</p>
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

        {/* Kinyarwanda Food Section */}
        {KinyarwandaFood && KinyarwandaFood.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Kinyarwanda Food
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {KinyarwandaFood.map((dining, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={dining.image}
                    alt={dining.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {dining.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{dining.short_desc}</p>
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

        {AfricanTradition && AfricanTradition.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-6">
              African Tradition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              {AfricanTradition.map((dining, index) => (
                <div
                  key={index}
                  className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={dining.image}
                    alt={dining.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-2xl text-primary-dark">
                      {dining.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{dining.short_desc}</p>
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

export default Dining;
