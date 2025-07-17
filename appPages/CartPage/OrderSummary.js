"use client";

import { useDispatch, useSelector } from "react-redux";
import Button from "../../shared/ui/button/Button";
import { selectCartItems } from "../../redux/reducer/cartSlice";
import { useFormattedPrice } from "../../hooks/useFormattedPrice";
import { useTranslations } from "next-intl";
import {
  fetchExchangeRates,
  selectCurrency,
  selectCurrencyStatus,
  selectExchangeRates,
} from "../../redux/reducer/currencySlice";
import { useEffect } from "react";
import { CreditCard } from "lucide-react";

function OrderSummary({ cartProducts }) {
  const t = useTranslations("CartPage.summary");
  const dispatch = useDispatch();

  // const cartItems = useSelector(selectCartItems) || [];

  const status = useSelector(selectCurrencyStatus);

  const deliveryFee = 35;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExchangeRates());
    }
  }, [status, dispatch]);

  // --- Вычисления ---

  // Общая сумма без скидок (например, цена без скидок)
  const totalOriginalEur =
    cartProducts.reduce((acc, p) => acc + (p.price || 0) * p.quantity, 0) +
    deliveryFee;

  // Сумма с учетом скидок        p.discountedPrice
  const totalDiscountedEur =
    cartProducts.reduce((acc, p) => acc + 290 * p.quantity, 0) + deliveryFee;

  // Акционная скидка (разница между общей и с учетом скидок)
  const promoDiscountEur = totalOriginalEur - totalDiscountedEur;

  // Экстра скидка от 500 евро
  const extraDiscountThreshold = 500;
  const formattedExtraDiscountFrom500 = useFormattedPrice(20);

  const extraDiscountText =
    totalDiscountedEur >= extraDiscountThreshold
      ? formattedExtraDiscountFrom500
      : "Не отобр.";

  // Отформатируем суммы
  const formattedTotalOriginal = useFormattedPrice(totalOriginalEur);
  const formattedPromoDiscount = useFormattedPrice(promoDiscountEur);

  // extraDiscountText либо "Не отобр.", либо formatted скидка, поэтому проверим тип
  const formattedExtraDiscount =
    typeof extraDiscountText === "string"
      ? extraDiscountText
      : extraDiscountText;

  // Для кнопки checkout проверяем сумму с учетом скидок
  const canCheckout = totalDiscountedEur >= 200;

  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="p-2 text-lg font-semibold rounded-xl text-[#848484] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        {t("title")}
      </h3>

      <div className="p-4 space-y-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-2xl h-fit">
        <div className="flex justify-between text-sm text-[#848484]">
          <span>Общая сумма:</span>
          <span className="text-[#444444] text-sm">
            {formattedTotalOriginal}
          </span>
        </div>

        <div className="flex justify-between text-sm text-[#848484]">
          <span>Акционная скидка:</span>
          <span className="text-[#D13438] text-sm">
            - {formattedPromoDiscount}
          </span>
        </div>

        <div className="flex justify-between text-sm text-[#848484]">
          <span>Экстра-скидка от {extraDiscountThreshold}€:</span>
          <span className="text-[#D13438] text-sm">
            {formattedExtraDiscount}
          </span>
        </div>

        <div className="border-b border-[#848484]"></div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-[#848484]">
            <span>{t("delivery")}</span>
            <span className="text-[#444444] text-sm">
              {useFormattedPrice(deliveryFee)}
            </span>
          </div>

          <div className="flex justify-between text-[#848484] font-bold text-sm">
            <span>{t("total")}</span>
            <span className="text-[#444444] text-sm">
              {useFormattedPrice(totalDiscountedEur)}
            </span>
          </div>
        </div>

        <Button
          disabled={!canCheckout}
          className="w-full  text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("checkout")}
        </Button>
      </div>
      {!canCheckout && (
        <div className=" bg-gradient-to-t from-white  to-gray-100   flex justify-center items-center gap-2  text-sm  rounded-xl px-2 py-2 shadow-md ">
          <div className="shadow-md p-1 rounded-lg">
            <CreditCard color="#96B87D" />
          </div>
          <span className="text-[#4A4A4A]">Мин. сумма — 200€</span>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
