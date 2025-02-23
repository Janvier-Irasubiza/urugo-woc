import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Accommodations", link: "/accommodations" },
    { name: "Dining", link: "/dining" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "Cultural", link: "/cultural" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <div className="border-b py-6 px-20">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold">Logo</div>
          <div className="space-x-12">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`font-medium text-base ${
                  isActive(item.link)
                    ? "text-primary border-b-2 border-b-primary text-lg font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                } transition`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-x-6 flex items-center">
            <Link
              to="/auth/login"
              className="font-medium border-2 btn-primary-outline hover:text-white text-gray-500 px-4 py-1 rounded-full transition"
            >
              Join Us
            </Link>
            <Link
              to="/auth/login"
              className="font-medium border-2 btn-primary hover:text-white text-gray-500 px-4 py-1 rounded-full transition"
            >
              Donate
            </Link>
            <button>
              <ShoppingBagIcon className="h-7 w-7 pry-txt p-0 m-0" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
