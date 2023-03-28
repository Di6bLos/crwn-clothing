import { useContext } from "react";
import { CategoriesContext } from "../contexts/Categories.context";
import CategoryPreview from "../components/CategoryPreview";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-container">
      {Object.keys(categories).map((title) => {
       const products = categories[title];
       return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
};

export default CategoriesPreview;
