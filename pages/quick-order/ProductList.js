import ProductSection from "./ProductSection";

const themes = [
  {
    title: "Professional Feet",
    products: [
      {
        id: "#7708",
        name: "Try Me Kit Pedicure",
        price: "23.00 €",
        quantity: 1,
        image: "/products/7708.png",
      },
      {
        id: "#7075",
        name: "Стартовый набор для мастера педикюра",
        price: "Цена только для мастеров",
        quantity: 0,
        image: "/products/7075.png",
      },
      // ...more products
    ],
  },
  {
    title: "Professional Hands",
    products: [
      {
        id: "#8801",
        name: "Try Me Kit Manicure",
        price: "19.00 €",
        quantity: 0,
        image: "/products/8801.png",
      },
      // ...more products
    ],
  },
];

export default function ProductThemeList() {
  return (
    <div className="space-y-12">
      {themes?.map((theme, i) => (
        <ProductSection key={i} title={theme?.title} products={theme?.products} />
      ))}
    </div>
  );
}