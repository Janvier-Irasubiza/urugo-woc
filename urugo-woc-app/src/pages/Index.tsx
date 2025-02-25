import Modal from "../components/modal";
import App from "../layouts/app";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import Donation from "../partials/Donation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Post {
  title: string;
  description: string;
  image: string;
  type: string;
}
[];

interface partners {
  logo: string;
  url: string;
}
[];

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [partners, setPartners] = useState<partners[]>([]);

  const fetchPosts = async () => {
    try {
      // Fetch data from API using axios
      const response = await axios.get("http://localhost:8000/api/blog-posts/");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPartners = async () => {
    try {
      // Fetch data from API using axios
      const response = await axios.get("http://localhost:8000/api/partners/");
      console.log(response.data);
      setPartners(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchPartners();
  }, []);

  const events = posts.filter((post) => post.type === "event");
  const newsUpdates = posts.filter((post) => post.type === "blog");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const infoCards = [
    {
      title: "Urugo Women Opportunity Center",
      description:
        "is a safe environment and dedicated facilities located in Kayonza District the Eastern province of Rwanda where women can learn, build new skills, and operate businesses that directly contribute to the local communities.",
    },
    {
      title: "The Urugo Eco-Lodge",
      description:
        "is a part of an innovative social enterprise promoting economic empowerment for women. Set in rolling hills with spectacular views and friendly, dedicated staff, it’s the perfect place to discover rural Rwanda, stay en-route on your safari adventure, or hold your next meeting, wedding or special event.",
    },
    {
      title: "Women and Men Learning Space",
      description:
        "The Urugo Women’s Opportunity Center provides vocational and  life skills training for women and supports our Men’s Engagement Program, designed to build support for women’s economic and social empowerment in Rwanda.",
    },
  ];

  return (
    <App>
      <div className="px-20 py-6">
        <div className="border w-full h-[474px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xl">Hero Image Placeholder</span>
        </div>

        {/* infoCards Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {infoCards.map((card, index) => (
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
            <button
              onClick={openModal}
              className="btn-primary text-white px-12 py-3 rounded-full hover:bg-orange-600"
            >
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
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-4 text-2xl text-primary-dark">
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
            {newsUpdates.map((update, index) => (
              <div
                key={index}
                className="bg-thrd-level rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-4 text-2xl text-primary-dark">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{update.description}</p>
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
            {partners.map((partner, index) => (
              <Link to={partner.url} target="_blank">
                <div
                  key={index}
                  className="bg-gray-100 h-16 w-32 flex items-center justify-center rounded-lg"
                >
                  <img src={partner.logo} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Donation />
      </Modal>
    </App>
  );
}

export default Index;
