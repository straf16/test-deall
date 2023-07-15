interface CardDetailProps {
  user: string;
  totalProduct: number;
  totalQuantity: number;
  totalPrice: number;
}

export function CardDetail({ user, totalProduct, totalQuantity, totalPrice }: CardDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-slate-400 bg-slate-200 px-6 py-8 mt-4">
      <span>User: {user}</span>
      <span># of Items {totalProduct}</span>
      <span>Total Quantity: {totalQuantity}</span>
      <span>Total Amount: {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
    </div>
  );
}