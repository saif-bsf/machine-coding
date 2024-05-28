import React from "react";

const ProductCard = ({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="flex basis-1/4 flex-col border border-black p-4 m-4">
      <img className="h-48 object-contain" alt={title} src={thumbnail} />
      <h1 className="font-bold p-2 text-xl">{title}</h1>
      <h2 className="p-2">
        {price} - {discountPercentage}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
