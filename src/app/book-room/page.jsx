import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const Book = dynamic(() => import("./components/Book"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="bg-[#F5EDE2] w-full h-full flex flex-col justify-start items-center px-0 lg:px-20 xl:px-96 py-0 lg:py-10">
      <Book />
      <Footer />
    </div>
  );
};

export default page;
