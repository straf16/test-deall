"use client"

import { useState } from "react";
import { InputSearch } from "@/components/inputSearch";

export default function Product() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex flex-col items-end px-8 py-16">
      <InputSearch
        value={keyword}
        placeholder="Search Product"
        onChange={setKeyword}
      />
    </div>
  )
}