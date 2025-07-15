"use client";
import React, { useState } from "react";
import productImg from "../../public/assets/image/product.png";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import Button from "../../shared/ui/button/Button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useFormattedPrice } from "../../hooks/useFormattedPrice";
import {
  addToCart,
  addToCartQuick,
  deleteFromCart,
  selectCartItems,
} from "../../redux/reducer/cartSlice";
import { useTranslations } from "next-intl";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState(0);
  const t = useTranslations("QuickProductSection");
  const formattedPrice = useFormattedPrice(product?.price);
  const [addedToCart, setAddedToCart] = useState(false);
  const quantityInCart =
    cartItems.find((item) => item.id === product.id)?.quantity || 0;

  const handleAddToCart = () => {
    console.log("Adding to cart:", product.id, quantity);

    if (quantity > 0) {
      dispatch(addToCartQuick({ id: product.id, quantity }));
      setQuantity(0);
      setAddedToCart(true);

      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-between shadow px-4 py-2 hover:shadow-sm flex-col gap-2 sm:gap-0 sm:flex-row">
      <div className="flex items-center gap-5 justify-between sm w-full sm:w-2/5 ">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 relative overflow-hidden">
            <Image
              src={productImg}
              alt={product?.title}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm sm:text-lg text-[#848484]">
            {product?.title}
          </span>
        </div>
        <div className="text-lg text-[#848484] text-center">#{product?.id}</div>
      </div>

      <div className="flex w-full sm:w-2/5 justify-between items-center">
        <div className="text-sm sm:text-lg font-semibold text-[#848484] text-center">
          {formattedPrice}
        </div>

        <div className="flex gap-6">
          <div className="flex items-center text-[#848484] gap-2 justify-center">
            <button
              onClick={() => setQuantity((p) => Math.max(p - 1, 0))}
              className="text-[15px] p-2 cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity((p) => p + 1)}
              className="text-[15px] p-2 cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>

          <div>
            <Button
              onClick={handleAddToCart}
              disabled={quantity === 0}
              className="w-full py-1 text-sm sm:text-lg font-medium rounded-lg text-black flex items-center justify-center"
              bgColor="bg-transparent shadow-sm!"
            >
              {addedToCart ? (
                <span className="text-green-600 flex items-center gap-1">
                  <Check size={20} />
                  <span className="hidden lg:inline text-[#848484]">
                    {t("added")}
                  </span>
                </span>
              ) : (
                <>
                  <span className="lg:hidden">
                    <ShoppingCart size={20} color="#000000" />
                  </span>
                  <span className="hidden lg:inline text-[#848484]">
                    {t("addToCart")}
                  </span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
