"use client"

import { useState, useEffect } from "react";
import { InputSearch } from "@/components/inputSearch";
import { Table } from "@/components/table";
import { Pagination } from "@/components/pagination";

export default function Product() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5&select=title,brand,price,stock,category");
        const jsonData = await response.json();
        setProducts(jsonData.products);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      key: "title",
      label: "Product Name"
    },
    {
      key: "brand",
      label: "Brand"
    },
    {
      key: "price",
      label: "Price"
    },
    {
      key: "stock",
      label: "Stock"
    },
    {
      key: "category",
      label: "Category"
    }
  ];

  return (
    <div className="flex flex-col items-end px-8 py-16">
      <InputSearch
        value={keyword}
        placeholder="Search Product"
        onChange={setKeyword}
      />
      <div className="flex flex-col w-full my-8 items-end gap-6">
        <Table columns={columns} rows={products} />
        <Pagination />
      </div>
    </div>
  )
}