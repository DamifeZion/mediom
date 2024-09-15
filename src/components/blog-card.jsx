import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "./ui/card";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { getCategoryColor } from "@/helpers/get-category-color";

export const BlogCard = ({ data, index }) => {
   const { id, author, title, date, lastRead, category, desc } = data;
   const { textColor, backgroundColor } = getCategoryColor(category || "lifestyle");

   return (
      <div className="relative flex flex-col justify-center">
         <img src="/blog-card.svg" className="object-cover rounded-md" />

         <Card className="border-none shadow shadow-[0_0_15px_rgba(0_0_0/0.05)] min-[500px]:w-10/12 -mt-[20%] lg:-mt-[25%] place-self-center">
            <CardHeader className="pb-4">
               <CardDescription className="flex flex-wrap items-center justify-between font-medium justi text-foreground text-md">
                  <span>By {author || "Chinonso Elum"}</span>

                  <span
                     style={{
                        backgroundColor: backgroundColor,
                        color: textColor,
                     }}
                     className="px-3 py-1 text-xs font-semibold rounded-full"
                  >
                     {category || "Lifestyle"}
                  </span>
               </CardDescription>

               <CardTitle className="text-xl leading-tight md:text-2xl lg:text-3xl">
                  {title ||
                     "How to Become a Millionaire in your 20’s Without Stress"}
               </CardTitle>
            </CardHeader>

            <CardContent>
               <p className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span>{date || "12 Jan, 2024. 12:00PM"}</span>
                  <span>Last Read: {lastRead || "2hrs ago"}</span>
               </p>

               <p className="mt-3">
                  {desc ||
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmodkk uyjtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerjhuy..."}
               </p>

               <Link to={routeConstants.blogDetails.replace(":id", id || 2)}>
                  <Button
                     variant="outline"
                     className="mt-4 min-w-[150px] py-5 bg-transparent hover:bg-transparent"
                  >
                     View <ArrowRight className="ml-2 size-4" />
                  </Button>
               </Link>
            </CardContent>
         </Card>
      </div>
   );
};
