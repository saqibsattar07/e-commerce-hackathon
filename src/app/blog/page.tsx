"use client";

import * as React from "react";

import { FaUser, FaCalendarAlt, FaSearch, FaTag } from "react-icons/fa";
import BlogBanner from "../components/blog/BlogBanner";
import DeliveryFeature from "../components/blog/DeliveryFeature";
import Link from "next/link";

const BlogPost = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      image: "blogs/Rectangle 73.png",
      date: "14 Oct 2024",
      link: "#",
    },
    {
      title: "Exploring new ways of decorating",
      image: "blogs/Rectangle 72.png",
      date: "14 Nov 2024",
      link: "#",
    },
    {
      title: "Handmade Pieces that took time to make",
      image: "blogs/Rectangle 71.png",
      date: "14 Nov 2024",
      link: "#",
    },
    {
      title: "Modern home in Milan",
      image: "blogs/Rectangle 70.png",
      date: "14 Nov 2024",
      link: "#",
    },
    {
      title: "Clorful office redesign",
      image: "blogs/Rectangle 69.png",
      date: "14 Nov 2024",
      link: "#",
    },
  ];

  const blogContents = [
    {
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.",
      image: "blogs/Rectangle 76.png",
      author: "Admin",
      date: "14 Oct 2024",
      category: "Wood",
    },
    {
      title: "Exploring new ways of decorating",
      description:
        "Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum.",
      image: "blogs/Rectangle 75.png",
      author: "Editor",
      date: "14 Nov 2024",
      category: "Handmade",
    },
    {
      title: "Handmade Pieces that took time to make",
      description:
        "Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum.",
      image: "blogs/Rectangle 74.png",
      author: "Editor",
      date: "14 Nov 2024",
      category: "Wood",
    },
  ];

  const totalPages = 3;

  return (
    <>
      <BlogBanner />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="md:col-span-2">
            {blogContents.map((content, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg mb-8"
              >
                <img
                  className="w-full h-64 object-cover md:h-auto md:max-h-96 lg:max-h-full"
                  src={content.image}
                  alt="Blog banner"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <span className="mr-4 flex items-center">
                      <FaUser className="mr-1" /> {content.author}
                    </span>
                    <span className="mr-4 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {content.date}
                    </span>
                    <span className="flex items-center">
                      <FaTag className="mr-1" /> {content.category}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {content.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{content.description}</p>
                  </div>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="mb-8">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-gray-600 hover:text-gray-800"
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <a
                      href={post.link}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <img
                        className="w-16 h-16 object-cover rounded mr-4"
                        src={post.image}
                        alt="Thumbnail"
                      />
                      <div className="flex flex-col">
                        <span>{post.title}</span>
                        <span className="text-sm text-gray-400">
                          {post.date}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        {/* Pagination */}
        <div className="flex gap-3 justify-center mt-10 text-xl text-black">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-5 py-2 rounded-lg transition-all ${
                currentPage === page ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
              }`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            className="px-5 py-2 bg-[#FFF9E5] rounded-lg"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
      <DeliveryFeature />
    </>
  );
};

export default BlogPost;
