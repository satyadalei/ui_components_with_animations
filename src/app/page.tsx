import Link from "next/link";

export default function Home() {
  const links = [
    {
      category: "Animations",
      allLinks: [
        {
          title: "Card Reveal On Hover",
          path: "/animations/revealonhover",
        },
        {
          title: "Infinite Scroll",
          path: "/animations/infinitescroll",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-200">
        Links
      </h1>
      <div className="space-y-8">
        {links.map(({ category, allLinks }) => {
          return (
            <div
              key={category}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-teal-400 mb-4 border-b border-teal-600 pb-2">
                {category}
              </h2>
              <ul className="space-y-2">
                {allLinks.map(({ title, path }) => {
                  return (
                    <li key={title}>
                      <Link
                        href={path}
                        className="text-lg text-gray-300 hover:text-teal-300 hover:underline transition-all duration-200 ease-in-out"
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
