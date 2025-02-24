import App from "../layouts/app";

const newsPost = {
  id: 1,
  title: "Urugo Center Launches New Artisan Program",
  image: "https://source.unsplash.com/800x400/?news,article",
  content: `
    The Urugo Women’s Opportunity Center has launched a new artisan program aimed at empowering local women artisans.
    The program focuses on providing training, resources, and market access for handmade crafts and traditional products.

    Participants will receive mentorship from experienced artisans and gain exposure through international exhibitions.
    This initiative seeks to preserve Rwanda’s rich cultural heritage while promoting economic independence among women.

    Applications for the next cohort are now open, with workshops beginning in June 2025. For more information,
    contact the program coordinator or visit the Urugo Center’s official website.
  `,
  author: "Admin",
  publishedDate: "March 20, 2025",
  tags: ["Artisan", "Empowerment", "Culture", "Rwanda"],
};

function NewsPostDetails() {
  return (
    <>
      <App>
        <div className="px-6 py-10 max-w-4xl mx-auto space-y-8">
          {/* News Image and Title */}
          <div className="space-y-4">
            <img
              src={newsPost.image}
              alt={newsPost.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-800">
              {newsPost.title}
            </h1>
          </div>

          {/* Metadata */}
          <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
            <span>Published on: {newsPost.publishedDate}</span>
            <span>By: {newsPost.author}</span>
          </div>

          {/* News Content */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {newsPost.content}
            </p>
          </div>

          {/* Tags Section */}
          <div className="mt-4 space-x-2">
            {newsPost.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Sharing */}
          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Share on Facebook
            </button>
            <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
              Share on Twitter
            </button>
          </div>
        </div>
      </App>
    </>
  );
}

export default NewsPostDetails;