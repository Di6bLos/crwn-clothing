import CategoryItem from "./CategoryItem";


const CategoryList = ({categories}) => {

     return (
        <div className="categories-container">
      {categories.map((category)=> {
      return  <CategoryItem key={category.id} category={category}/>
      })}
    </div>
     ) 
      
}

export default CategoryList;