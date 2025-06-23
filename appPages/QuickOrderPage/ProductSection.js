"use client"
import ProductItem from "./ProductItem"
import Title from "../../shared/ui/title/Title";
import { selectProducts } from "../../redux/reducer/cartSlice";
import { useSelector } from "react-redux";
export default function ProductSection({ theme }) {

  const products = useSelector(selectProducts).filter(item => item.category === theme)

  return (
    <>
      <div className=" rounded-t-[100px] bg-[#F5F5F5] mb-2 shadow py-6">
        <Title color="green" className="font-semibold  text-center">{theme}</Title>
      </div>

      <div className="flex flex-col gap-2">
        {products?.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}