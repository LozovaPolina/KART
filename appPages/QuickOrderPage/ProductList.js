import ProductSection from "./ProductSection";
import { categories } from "../../data/categories"

export default function ProductThemeList() {

  return (
    <div className="space-y-12">
      {categories?.map((theme, i) => (
        <ProductSection key={i} theme={theme} />
      ))}
    </div>
  );
}