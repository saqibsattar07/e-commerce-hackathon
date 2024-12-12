import AsgaardSofa from "./components/AsgaardSofa";
import BlogPosts from "./components/BlogPosts";
import FurnitureShowcase from "./components/FurnitureShowcase";
import Hero from "./components/Hero";
import InstagramSection from "./components/Instagram";
import SideTable from "./components/SideTable";

export default function Home() {
  return (
    <>
      <Hero />
      <SideTable />
      <FurnitureShowcase />
      <AsgaardSofa />
      <BlogPosts />
      <InstagramSection />
    </>
  );
}
