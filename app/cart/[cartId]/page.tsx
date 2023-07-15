import { CardDetail } from "@/components/cardDetail";

export default function CartDetail({ params }: { params: { cardId: string } }) {
  return (
    <div className="flex flex-col px-8 py-16">
      <h1>Cart {params.cardId}</h1>
      <h1 className="mt-10">Details</h1>
      <CardDetail />
      <h1 className="mt-10">Products</h1>
    </div>
  )
}