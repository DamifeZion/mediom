import { SearchIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
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

export const Filters = () => {
   const [searchParams, setSearchparams] = useSearchParams();

   // const 

   return (
      <div className="flex flex-wrap items-center justify-between w-full">
         <div className="flex gap-2">
            <Select defaultValue="">
               <SelectTrigger className="w-fit">
                  <SelectValue placeholder="Select category"/>
               </SelectTrigger>

               <SelectContent>
                  {filterConstants.category.map((item, index) => (
                     <SelectItem
                        key={index}
                        value={item}
                        className="capitalize"
                     >
                        { item }
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>

         <div className="relative">
            <SearchIcon className="absolute left-0 -translate-y-1/2 size-2 top-1/2" />
            <Input placeholder="Search" />
         </div>
      </div>
   );
};
