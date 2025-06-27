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
        <div
          className="items-center justify-between hidden sm:flex  shadow  px-4 py-2 hover:shadow-sm flex-col gap-2 sm:gap-0 sm:flex-row"
        >
          <div className="flex items-center gap-5 w-full sm:w-2/5 ">

            <span className="text-sm text-[#848484]">Товар</span>
          </div>
          <div className="flex w-full sm:w-[70%] justify-between items-center ">
            <div className="text-sm text-[#848484] w-[80px] text-center">Код</div>
            <div className="text-sm font-semibold text-[#848484] w-[160px] text-center">
              Цена
            </div>

            <div className="max-w-[190px] w-full  text-start">
              Количество
            </div>

          </div>

        </div >
        {products?.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}