import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../contexts/Categories.context";

import ProductCard from "../components/ProductCard";

const Category = () => {
    const { category } = useParams();
    const {categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        setProducts(categories[category]);
    }, [category, categories])

    return (
        <div className="category-container">
           { products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default Category;