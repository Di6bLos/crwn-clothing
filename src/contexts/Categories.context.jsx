import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocs } from "../utils/firebase.utils.js";

export const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({});
    const value = {categories};

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocs()
            // console.log(categoriesMap);
            setCategories(categoriesMap);
        };
        getCategoriesMap();
    }, []);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};

