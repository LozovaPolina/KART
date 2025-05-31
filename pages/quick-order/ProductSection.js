import Button from "@/shared/button/Button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
export default function ProductSection({ title, products }) {
  return (
    <>
      <div className=" rounded-t-[100px] bg-[#F5F5F5] mb-2 shadow py-6">
        <h2 className="text-green-600 text-xl font-semibold  text-center">{title}</h2>
      </div>

      <div className="flex flex-col gap-2">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between  shadow  px-4 py-2 hover:shadow-sm flex-col gap-2 sm:gap-0 sm:flex-row"
          >
            <div className="flex items-center gap-5 w-full sm:w-2/5 ">
              <div className="w-12 h-12 relative  overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#848484]">{product.name}</span>
            </div>
            <div className="flex w-full sm:w-[70%] justify-between items-center ">
              <div className="text-sm text-[#848484] w-[80px] text-center">{product.id}</div>
              <div className="text-sm font-semibold text-[#848484] w-[90px] text-center">
                {product.price}
              </div>
              <div className="flex items-center text-[#848484] gap-2 w-[80px] justify-center">
                <button className=" text-[15px] p-2">−</button>
                <span className="text-lg font-bold">{product.quantity}</span>
                <button className="text-[15px] p-2">+</button>
              </div>
              <div className="sm:w-[110px]">
                <Button className=" py-1 text-sm font-medium text-black! block  sm:hidden" bgColor={'white'} > <ShoppingCart /> </Button>
                <Button className="w-full py-1 text-sm font-medium text-black! hidden sm:block" bgColor={'white'} >В корзину</Button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </>


  );
}