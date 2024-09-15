import { Button } from "@/components/ui/button";
import { getCategoryColor } from "@/helpers/get-category-color";
import { useBlogDetails } from "@/hooks/use-blog-details";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
   const navigate = useNavigate();
   const { handleDelete, blogDetails } = useBlogDetails();

   const { textColor, backgroundColor } = getCategoryColor(
      blogDetails?.category || "lifestyle"
   );

   return (
      <main className="container py-12">
         <Button
            variant="ghost"
            onClick={() => navigate(-1, { replace: true })}
         >
            <ArrowLeft className="mr-2 size-4" />
            All Blogs<b>/Blog Details</b>
         </Button>

         {/*Action Button Section */}
         <section className="mt-10 flex items-center justify-end gap-2 [&_button]:px-10">
            <Button variant="destructive" onClick={handleDelete}>
               Delete
            </Button>

            <Button
               variant="outline"
               className="bg-transparent border-border hover:text-primary hover:border-primary"
            >
               Edit
            </Button>
         </section>

         {/* Header Title Section */}
         <section className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
               <h4 className="font-semibold">By {blogDetails?.author}</h4>
               <span
                  style={{
                     backgroundColor: backgroundColor,
                     color: textColor,
                  }}
                  className="px-3 py-[5px] text-xs font-semibold rounded-full"
               >
                  {blogDetails?.category || "Lifestyle"}
               </span>
            </div>

            <div className="mt-2 flex items-center justify-between gap-2 [&_p]:text-sm [&_p]:text-muted-foreground">
               <p>{blogDetails?.date}</p>
               <p>{blogDetails?.date}</p>
            </div>

            <h1 className="mt-8 text-4xl font-bold !leading-tight max-lg:max-w-2xl md:text-5xl">
               {blogDetails?.title}
            </h1>

            <img
               src={blogDetails?.thumbnail}
               className="w-full h-full mt-10 max-h-[450px] object-cover rounded-2xl"
            />

            <div
               dangerouslySetInnerHTML={{ __html: blogDetails?.html }}
               className="mt-10 space-y-4"
            />
         </section>
      </main>
   );
};

export default BlogDetails;
