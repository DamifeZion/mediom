import { SearchIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";
import { filterConstants } from "@/constants/filter-const";
import { capitalizeWords } from "@/helpers/capitalize-words";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { routeConstants } from "@/constants/route-const";
import { useEffect, useState } from "react";

export const Filters = () => {
   const navigate = useNavigate();
   const [searchParams, setSearchparams] = useSearchParams();

   const [formValues, setFormValues] = useState({
      category: "",
      search: "",
   });

   const handleSetFormField = (field, value) => {
      setFormValues((prev) => ({
         ...prev,
         [field]: value,
      }));
   };

   //Everytime any value change, we simply want to put it as a param in the url, as debounce, spceifically the input
   useEffect(() => {
      
   })

   return (
      <div className="flex flex-wrap items-center justify-between w-full">
         <div className="flex gap-2">
            <Select
               defaultValue={filterConstants.category[0]}
               onValueChange={(value) => handleSetFormField("category", value)}
            >
               <SelectTrigger className="capitalize w-fit">
                  <SelectValue placeholder="Select category" />
               </SelectTrigger>

               <SelectContent>
                  {filterConstants.category.map((item, index) => (
                     <SelectItem
                        key={index}
                        value={item}
                        className="capitalize"
                     >
                        {item}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>

            <Button
               variant="outline"
               onClick={() => navigate(routeConstants.create)}
               className=""
            >
               <PlusIcon strokeWidth={2} className="mr-2" /> Create New
            </Button>
         </div>

         <div className="relative flex-1 max-w-xs">
            <SearchIcon className="absolute -translate-y-1/2 left-2 size-4 top-1/2" />
            <Input
               placeholder="Search"
               value={formValues.search}
               onChange={(e) => handleSetFormField("search", e.target.value)}
               className="pl-8 rounded-full bg-muted"
            />
         </div>
      </div>
   );
};
