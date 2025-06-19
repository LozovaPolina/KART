import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/reducer/cartSlice";
import CombinedOrders from './CombinedOrders'
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
        <CombinedOrders key={orderGroup.date} orderGroup={orderGroup} />

      ))}
    </div>
  );
}
