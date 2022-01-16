import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((items) => (
            <CollectionItem
              key={items.id}
              name={items.name}
              price={items.price}
              imageUrl={items.imageUrl}
            ></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
