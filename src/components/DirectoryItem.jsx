import {Link} from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <Link to={`shop/${title.toLowerCase()}`} className="directory-body">
        
          <h2>{title}</h2>
      
        <p>Shop Now</p>
      </Link> 
    </div>
  );
};

export default DirectoryItem;
