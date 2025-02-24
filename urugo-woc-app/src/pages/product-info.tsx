import { ShoppingCartIcon, StarIcon, TagIcon } from "@heroicons/react/24/solid";
import App from "../layouts/app";

const productDetails = {
  id: 1,
  name: "Handwoven Basket",
  images: [
    "https://source.unsplash.com/600x400/?basket",
    "https://source.unsplash.com/600x400/?craft",
    "https://source.unsplash.com/600x400/?artisan",
  ],
  category: "Traditional Crafts",
  description:
    "A beautifully handwoven basket made by local artisans in Rwanda. Perfect for home decor or functional use.",
  price: 45,
  availableStock: 12,
  rating: 4.6,
  reviews: [
    {
      user: "Alice Johnson",
      comment: "Exquisite craftsmanship, highly recommended!",
      rating: 5,
    },
    {
      user: "Mark Lee",
      comment: "Looks great in my living room.",
      rating: 4,
    },
  ],
};

function ProductInfo() {
  return (
    <>
      <App>
        <div className="px-6 py-6 max-w-6xl mx-auto space-y-10">
          {/* Product Title & Image Gallery */}

          <div className="text-sm text-gray-500">
            Home / Marketplace / {productDetails.name}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {productDetails.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="rounded-xl object-cover w-full h-64 shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section - Details */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
              <p className="text-gray-600">{productDetails.description}</p>

              <div className="flex items-center space-x-2 text-gray-500">
                <TagIcon className="h-6 w-6 text-secondary" />
                <span>{productDetails.category}</span>
              </div>

              <div className="flex items-center space-x-2 text-yellow-500">
                <StarIcon className="h-5 w-5" />
                <span>{productDetails.rating} / 5.0</span>
              </div>

              <div className="text-sm text-gray-400">
                <span>
                  {productDetails.availableStock > 0
                    ? `${productDetails.availableStock} in stock`
                    : "Out of stock"}
                </span>
              </div>
            </div>

            {/* Right Section - Purchase Form */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-lg space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Purchase This Product
              </h2>
              <p className="text-3xl font-bold text-secondary">
                ${productDetails.price}
              </p>

              {/* Purchase Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={productDetails.availableStock}
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300"
                    disabled={productDetails.availableStock === 0}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg btn-primary text-white transition"
                  disabled={productDetails.availableStock === 0}
                >
                  <ShoppingCartIcon className="h-5 w-5 inline-block mr-2" />
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}

export default ProductInfo;
