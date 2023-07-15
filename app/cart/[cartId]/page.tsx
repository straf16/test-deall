"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CardDetail } from "@/components/cardDetail";
import { Table } from "@/components/table";

export default function CartDetail({ params }: { params: { cartId: string } }) {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [products, setProducts] = useState<[]>([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`
          https://dummyjson.com/carts/${params.cartId}
        `);
        const jsonData = await response.json();
        const responseUser = await fetch(`https://dummyjson.com/users/${jsonData.userId}`)
        const jsonUser = await responseUser.json();
        setUser(`${jsonUser.firstName} ${jsonUser.lastName}`);
        setProducts(jsonData.products);
        setTotalProduct(jsonData.totalProducts);
        setTotalQty(jsonData.totalQuantity);
        setTotalPrice(jsonData.total);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [params.cartId]);

  const columns = [
    {
      key: "title",
      label: "Product Name"
    },
    {
      key: "price",
      label: "Price"
    },
    {
      key: "quantity",
      label: "Quantity"
    },
    {
      key: "total",
      label: "Total Price"
    }
  ];

  return (
    <div className="flex flex-col px-8 py-16">
      <h1 className="mb-4 cursor-pointer text-cyan-600" onClick={() => router.back()}>Back to carts</h1>
      <h1>Cart {params.cartId}</h1>
      <h1 className="mt-10">Details</h1>
      <CardDetail
        user={user}
        totalProduct={totalProduct}
        totalQuantity={totalQty}
        totalPrice={totalPrice}
      />
      <h1 className="mt-10">Products</h1>
      <div className="flex flex-col w-full my-4 items-end gap-6">
        <Table columns={columns} rows={products} />
      </div>
    </div>
  )
}