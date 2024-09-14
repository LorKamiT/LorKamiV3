import React, { useEffect, useState } from "react";
import { FaTag } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const tags = [
  "REDM", "LEJANO OESTE", "CANTARES", "FRONTERA", "FIVEM", "BACKV", "VIBES", "SAFD", 
  "OASIS", "CLICKSENSE", "NEGROS", "GANGA", "LOS ANGELES", "BOMBEROS", "URBANPULSE", 
  "VIVA CHILE", "FORTNITE", "MINECRAFT", "SAMP", "OTROS", "VIDEO", "GIF", "SEA OF THIEVES"
];

const TagSelector = ({ selectedTags, setSelectedTags }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Leer los tags desde los parámetros de la URL
  useEffect(() => {
    const initialTags = searchParams.get("tags");
    if (initialTags) {
      setSelectedTags(initialTags.split(","));
    }
  }, [searchParams, setSelectedTags]);

  const toggleTag = (tag) => {
    let updatedTags;

    if (selectedTags.includes(tag)) {
      updatedTags = selectedTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }

    setSelectedTags(updatedTags);

    // Actualizar los parámetros en la URL
    const params = new URLSearchParams(searchParams);
    if (updatedTags.length > 0) {
      params.set("tags", updatedTags.join(","));
    } else {
      params.delete("tags");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`rounded-md px-3 py-1 text-xs cursor-pointer ${
            selectedTags.includes(tag)
              ? "bg-[#727272] text-white"
              : "bg-[#555555] text-white dark:bg-[#f0f0f0] dark:text-[#333333]"
          }`}
        >
          <FaTag className="inline-block mr-1" /> {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
