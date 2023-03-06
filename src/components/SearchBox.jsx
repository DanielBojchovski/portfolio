"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e){
        e.preventDefault();
        if(!search) return;
        router.push(`imdb/search/${search}`);
        setSearch("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-1">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-1/2 h-14 rounded-lg bg-transparent placeholder-gray-500 border border-cyan-500 p-2"
      />
      <button disabled={!search} type="submit" className=" disabled:text-gray-800 bg-amber-500 hover:bg-teal-500 text-white text-xl font-bold py-2 px-4 rounded-lg border-2 border-teal-500 mx-2 duration-300">
        Search
      </button>
    </form>
  );
}
