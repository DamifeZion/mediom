import { BlogCard } from "@/components/blog-card";
import { Filters } from "@/components/filters";
import { Button } from "@/components/ui/button";
import { routeConstants } from "@/constants/route-const";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <main className="container pt-10">
         <section>
            <Filters />
         </section>

         {/* Spotlights */}
         <section className="flex gap-10 mt-8 md:items-center max-md:flex-col">
            <img
               src="/home/spotlight.svg"
               alt="blog-1"
               className="flex-1 max-w-sm rounded-l-2xl"
            />

            <div className="py-2">
               <p className="text-xl font-medium">By Chinonso Elum</p>

               <h1 className="max-w-lg text-3xl font-semibold leading-normal sm:text-4xl lg:text-5xl lg:leading-snug">
                  How to Become a Millionaire in your 20’s Without Stress
               </h1>

               <p className="flex flex-wrap items-center justify-between sm:text-sm max-lg:mt-4">
                  <span>12 Jan, 2024. 2:00PM</span>
                  <span>Last Read: 2hrs ago</span>
               </p>

               <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodkk uyjtempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex eajjkkllll commodo
                  consequat. Duis aute irure dolor in reprehenderit in
                  voluphhjbk...
               </p>

               <Link to={routeConstants.blogDetails.replace(":id", 2)}>
                  <Button
                     variant="outline"
                     className="mt-4 min-w-[150px] py-5 bg-transparent hover:bg-transparent"
                  >
                     View <ArrowRight className="ml-2 size-4" />
                  </Button>
               </Link>
            </div>
         </section>

         {/* Blog Card Preview */}
         <section className="grid py-20 gap-x-6 gap-y-8 md:grid-cols-2">
            {Array.from({length: 10}).map((_, index) => (
               <BlogCard 
                  key={index}
               />
            ))}
         </section>
      </main>
   );
};

export default Home;
