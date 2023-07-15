"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Table } from "@/components/table";
import { Pagination } from "@/components/pagination";

export default function Cart() {
  const router = useRouter();

  const [carts, setCarts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`
          https://dummyjson.com/carts/?limit=5&skip=${skip * 5}
        `);
        const jsonData = await response.json();
        setCarts(jsonData.carts);
        setTotal(jsonData.total);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [skip]);

  const columns = [
    {
      key: "id",
      label: "Id"
    },
    {
      key: "userId",
      label: "User ID"
    },
    {
      key: "totalProducts",
      label: "Total Products"
    },
    {
      key: "totalQuantity",
      label: "Total Quantity"
    },
    {
      key: "total",
      label: "Total Price"
    }
  ];

  return (
    <div className="flex flex-col px-8 py-16">
      <h1>Cart</h1>
      <div className="flex flex-col w-full my-8 items-end gap-6">
        <Table
          columns={columns}
          rows={carts}
          onRowClick={(id) => router.push(`/cart/${id}`)}
        />
        <Pagination
          page={skip + 1}
          totalPage={Math.ceil(total / 5)}
          onPageChange={(page) => setSkip(page - 1)}
        />
      </div>
    </div>
  )
}