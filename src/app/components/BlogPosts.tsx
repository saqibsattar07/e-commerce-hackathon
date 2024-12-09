import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

type BlogPostProps = {
  imageSrc: string;
  title: string;
  readTime: string;
  date: string;
};

const blogPostsData: BlogPostProps[] = [
  {
    imageSrc: "images/Rectangle 13.png",
    title: "Going all-in with millennial design",
    readTime: "5 min",
    date: "12th Oct 2022",
  },
  {
    imageSrc: "images/Rectangle 14.png",
    title: "Exploring modern design aesthetics",
    readTime: "6 min",
    date: "15th Oct 2022",
  },
  {
    imageSrc: "images/Rectangle 15.png",
    title: "Trendy minimalist approach",
    readTime: "4 min",
    date: "18th Oct 2022",
  },
];

const BlogPost = ({ imageSrc, title, readTime, date }: BlogPostProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[320px] mx-auto">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-[200px] rounded-lg"
      />
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
      <button className="mt-2 text-black text-base sm:text-lg font-medium underline">
        Read More
      </button>
      <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm sm:text-base">
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{readTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Our Blogs
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl sm:text-lg">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPostsData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <button className="mt-10 text-lg sm:text-xl font-medium text-black">
        View All Posts
      </button>
      <div className="mt-2 w-[126px] h-[2px] bg-black" />
    </div>
  );
};

export default BlogPosts;
