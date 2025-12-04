import React from "react";

const ProductCard = ({ product }) => {
  const demoText =
    "Discover the best quality products from around the world, right at your fingertips.";

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.product_image}
          alt={product.product_name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x250.png?text=Image+Not+Found";
          }}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-primary justify-center">
          {product.product_name}
        </h2>

        <p className="text-base-content/70 text-sm italic">{demoText}</p>

        <p className="text-base-content/80">
          Price: <span className="font-semibold">${product.price}</span>
        </p>
        <p className="text-base-content/80">
          Origin: {product.origin_country || "N/A"}
        </p>
        <p className="text-base-content/80">
          Rating: {product.rating || "N/A"} ⭐
        </p>
        <p
          className={`text-sm font-medium mt-1 ${
            product.available_quantity > 0 ? "text-success" : "text-error"
          }`}>
          {product.available_quantity > 0
            ? `${product.available_quantity} in stock`
            : "Out of stock"}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
