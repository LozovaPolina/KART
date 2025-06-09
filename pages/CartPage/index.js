
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";


export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-3 space-y-4">
        <div className="text-sm text-[#848484]">Главная {'>'} Корзина</div>
        <h1 className="text-2xl font-bold">КОРЗИНА</h1>

        {/* Header */}
        <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr] font-medium text-[#848484] py-2 rounded-xl shadow p-2 bg-[#F5F5F5]">
          <div>Товар</div>
          <div className="text-center">Цена</div>
          <div className="text-end">Итого</div>
        </div>

        {/* Product List */}
        <ProductList />


      </div>

      <OrderSummary />
    </div>
  );
}
