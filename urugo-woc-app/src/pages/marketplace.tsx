import { useEffect, useState } from "react";
import App from "../layouts/app";
import axios from "axios";

interface Marketplace {
  image: string;
  title: string;
  short_desc: string;
  price: number;
  category: string;
}

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Products");
  const [products, setProducts] = useState<Marketplace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1) => {
    if (page > totalPages) return;
    try {
      const response = await axios.get(
        `http://localhost:8000/api/listings/?type=product&page=${page}`
      );
      console.log(response.data);
  
      setProducts((prevProducts) => {
        const newProducts = response.data.results;
          const uniqueProducts = [...prevProducts, ...newProducts].reduce(
          (acc, product) => {
            if (!acc.some((item: Marketplace) => item.title === product.title)) {
              acc.push(product);
            }
            return acc;
          },
          [] as Marketplace[]
        );
  
        return uniqueProducts;
      });
  
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {products.map((event, index) => (
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
                  <p className="text-gray-600 mb-6">{event.short_desc}</p>
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
