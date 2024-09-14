import React, { useState, useEffect } from "react";
import { TbZoom } from "react-icons/tb";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = ({ placeholder, setSearchTerm }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const [term, setTerm] = useState("");

  useEffect(() => {
    const initialSearchTerm = searchParams.get("search") || "";
    setTerm(initialSearchTerm);
    setSearchTerm(initialSearchTerm);
  }, [searchParams, setSearchTerm]);

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);

    setSearchTerm(term);
  };

  return (
    <div className="z-20 relative mb-4">
      <TbZoom className="z-20 absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder || "Buscador de imágenes"}
        value={term}
        onChange={(e) => {
          const newTerm = e.target.value;
          setTerm(newTerm);
          handleSearch(newTerm);
        }}
        className="z-20 w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
