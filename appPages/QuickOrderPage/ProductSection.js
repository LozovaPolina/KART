"use client"
import ProductItem from "./ProductItem"
import Title from "../../shared/ui/title/Title";
import { selectProducts } from "../../redux/reducer/cartSlice";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
export default function ProductSection({ theme }) {

  const products = useSelector(selectProducts).filter(item => item.category === theme)
  const t = useTranslations('QuickProductSection');
  return (
    <>
      <div className=" rounded-t-[100px] bg-[#F5F5F5] mb-2 shadow py-6">
        <Title color="green" className="font-semibold  text-center">{theme}</Title>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="items-center justify-between hidden sm:flex  shadow  px-4 py-2 hover:shadow-sm flex-col gap-2 sm:gap-0 sm:flex-row"
        >
          <div className="flex items-center justify-between gap-5 w-full sm:w-2/5 ">

            <span className="sm:text-lg text-sm text-[#848484] flex-11">{t('product')}</span>
            <div className="sm:text-lg text-sm text-[#848484] text-start flex-1">{t('code')}</div>
          </div>
          <div className="flex  justify-between items-center  w-full sm:w-2/5  ">

            <div className="sm:text-lg text-sm flex-7 text-[#848484] text-start">{t('price')}</div>

            <div className="text-[#848484] flex-9 text-center">{t('quantity')}</div>

          </div>

        </div >
        {products?.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}