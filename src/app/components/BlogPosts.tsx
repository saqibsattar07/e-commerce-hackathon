import Link from "next/link";
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
    <div className="flex flex-col items-center w-full max-w-[320px] mx-auto sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-[200px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-lg"
      />
      <h3 className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
        {title}
      </h3>
      <button className="mt-2 text-black text-sm sm:text-base md:text-lg font-medium underline">
        Read More
      </button>
      <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs sm:text-sm md:text-base">
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
    <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-20 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
        Our Blogs
      </h2>
      <p className="text-gray-600 text-center mb-8 sm:mb-10 max-w-xl sm:text-base md:text-lg">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor, and table lights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {blogPostsData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <Link href="/blog">
        <button className="mt-8 sm:mt-10 px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg font-medium rounded hover:bg-gray-800 transition">
          View All Posts
        </button>
      </Link>
      <div className="mt-4 w-[100px] sm:w-[120px] h-[2px] bg-black" />
    </div>
  );
};

export default BlogPosts;
