import { ChevronDown, SearchIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ComboBox } from "./ui/combo-box";
import { filterConstants } from "@/constants/filter-const";
import { routeConstants } from "@/constants/route-const";
import { useDebounce } from "@/hooks/use-debounce";

export const Filters = () => {
   const navigate = useNavigate();
   const [searchParams, setSearchParams] = useSearchParams();

   const [formValues, setFormValues] = useState({
      category: "",
      search: "",
   });

   // Debounce the search value
   const debouncedSearch = useDebounce(formValues.search);

   // Update form values
   const handleSetFormField = (field, value) => {
      setFormValues((prev) => ({
         ...prev,
         [field]: value,
      }));
   };

   // Update the category param in the URL
   useEffect(() => {
      setSearchParams((prevParams) => ({
         ...Object.fromEntries(prevParams.entries()),
         category: formValues.category,
      }));
   }, [formValues.category, setSearchParams]);

   // Update the search param in the URL when debounced search changes
   useEffect(() => {
      setSearchParams((prevParams) => ({
         ...Object.fromEntries(prevParams.entries()),
         search: debouncedSearch || undefined,
      }));
   }, [debouncedSearch, setSearchParams]);

   return (
      <div className="flex flex-wrap items-center justify-between w-full">
         <div className="flex gap-2">
            <ComboBox
               array={filterConstants.category}
               defaultValue={filterConstants.category[0]}
               onValueChange={(value) => handleSetFormField("category", value)}
               triggerClassName="bg-transparent shadow-none"
               popoverContentClassName="min-w-[140px]"
               iconRight={<ChevronDown size={10} />}
            />
            <Button
               variant="outline"
               onClick={() => navigate(routeConstants.create)}
            >
               <PlusIcon strokeWidth={2} className="mr-2" /> Create New
            </Button>
         </div>
         <div className="relative flex-1 max-w-xs">
            <SearchIcon className="absolute -translate-y-1/2 left-3 size-4 top-1/2" />
            <Input
               placeholder="Search"
               value={formValues.search}
               onChange={(e) => handleSetFormField("search", e.target.value)}
               className="rounded-full pl-9 bg-muted"
            />
         </div>
      </div>
   );
};
