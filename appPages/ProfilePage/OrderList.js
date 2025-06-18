import Image from "next/image";
import image from "../../public/assets/image/product.png"
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/reducer/cartSlice";
import { formatCurrencyRightLocalized } from "../../util/currencyFormater";
const orders = [
  {
    date: "13.03.2025",
    status: "Оплачено",
    orderNumber: "112097",
    total: "455.00",
    items: [
      {
        image: "/img1.jpg",
        title: "Try Me Kit Pedicure",
        id: "67708",
        price: "23.00",
        quantity: 1,
      },
      {
        image: "/img2.jpg",
        title: "Try Me Kit Pedicure",
        id: "7075",
        price: null,
        quantity: 3,
      },
      {
        image: "/img3.jpg",
        title: "Противогрибковый набор",
        id: "7071",
        price: "96.00",
        quantity: 2,
      },
      {
        image: "/img3.jpg",
        title: "Противогрибковый набор",
        id: "70723",
        price: "96.00",
        quantity: 2,
      },
      {
        image: "/img3.jpg",
        title: "Противогрибковый набор",
        id: "70720",
        price: "96.00",
        quantity: 2,
      },
    ],
  },
];

export default function OrderList() {
  const cartItems = useSelector(selectCartItems);

  const combinedOrders = [
    {
      date: new Date().toLocaleDateString("ru-RU"), // или 'Сегодня'
      status: "Ожидает оплаты",
      orderNumber: "Корзина",
      total: cartItems?.reduce((acc, p) => acc + p.price * p.quantity, 0) || 0,
      items: cartItems,
    },
    ...orders,
  ];
  return (
    <div className="space-y-6 h-[503px] hide-scrollbar">
      {combinedOrders.map((orderGroup) => (
        <div key={orderGroup.date} className=" rounded-xl p-4">
          <div className="flex items-center justify-between gap-4 mb-2">

            <div className="flex flex-1 items-center justify-between  w-full  px-4 py-2 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

              <span className="text-sm font-semibold">{orderGroup.date}</span>
              <span
                className={`text-sm font-semibold ${orderGroup.status === "Оплачено"
                  ? "text-red-500"
                  : "text-yellow-500"
                  }`}
              >
                {orderGroup.status}

              </span>
              <span className="text-sm text-gray-600 font-medium">
                #{orderGroup.orderNumber}
              </span>
            </div>
            <span className="text-green-600 p-2 rounded-xl font-semibold shadow-[0px_2px_10px_rgba(0,0,0,0.1)] ">
              {formatCurrencyRightLocalized(orderGroup.total)}
            </span>
          </div>





          <div className="space-y-3">
            {orderGroup.items.map((item) => (
              <div
                key={item.code}
                className="flex border-b border-[#E3E3E3] items-center gap-4 text-sm text-gray-700"
              >
                <Image
                  src={image}
                  alt={item.title}
                  width={12}
                  height={12}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium truncate">{item.title}</div>
                  <div className="text-xs text-gray-400">#{item.id}</div>
                </div>
                <div className="w-20 text-right">
                  {item.price ? (
                    <span>{formatCurrencyRightLocalized(item.price)} </span>
                  ) : (
                    <span className="text-gray-400">Цена только для мастеров</span>
                  )}
                </div>
                <div className="w-6 text-center">{formatCurrencyRightLocalized(item.quantity)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
