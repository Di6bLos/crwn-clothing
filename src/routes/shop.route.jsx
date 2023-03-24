import { useContext } from "react";
import { ProductContext } from "../contexts/Product.context";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop Products</h1>
      <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
