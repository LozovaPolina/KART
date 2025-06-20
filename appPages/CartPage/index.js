"use client"
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Title from "../../shared/ui/title/Title";

export default function CartPage() {
  return (

    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-6 w-full justify-center mb-4">
        <HintNavigation
          links={[
            { label: "Главная", href: "/" },
            { label: "Корзина", href: "/cart" },
          ]}
        />
        <Title>КОРЗИНА</Title>
      </div>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="md:col-span-3 space-y-4">


          {/* Header */}
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr]  text-[#848484] py-2 rounded-xl shadow p-2 bg-[#F5F5F5]">
            <div>Товар</div>
            <div className="text-center">Цена</div>
            <div className="text-end">Итого</div>
          </div>

          {/* Product List */}
          <ProductList />


        </div>

        <OrderSummary />
      </div>
    </div>
  );


}
