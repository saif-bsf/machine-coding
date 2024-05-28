import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * 10
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    setProducts(json.products);
    setNumberOfPages(json.total / LIMIT);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            thumbnail={product.thumbnail}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 m-4">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage(currentPage - 1)}
            className="cursor-pointer"
          >
            Prev
          </span>
        )}
        {[...Array(numberOfPages).keys()].map((pn) => (
          <span
            className={"cursor-pointer " + (pn === currentPage && "font-bold")}
            key={pn}
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {currentPage > numberOfPages - 1 && (
          <span
            onClick={() => setCurrentPage(currentPage + 1)}
            className="cursor-pointer"
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
