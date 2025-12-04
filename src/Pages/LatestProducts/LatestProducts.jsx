import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://smart-deals-app.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Recent <span className="text-primary">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="card bg-base-100 shadow-xl">
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
                <p className="text-base-content/80">
                  Price: <span className="font-semibold">${product.price}</span>
                </p>
                <p className="text-base-content/80">
                  Origin: {product.origin_country}
                </p>
                <p className="text-base-content/80">
                  Rating: {product.rating} ⭐
                </p>
                <p className="text-base-content/80">
                  Stock:{" "}
                  {product.available_quantity > 0 ? (
                    product.available_quantity
                  ) : (
                    <span className="text-error">Out of stock</span>
                  )}
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/products-details/${product._id}`}
                    className="btn btn-primary btn-block shadow-none">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/allProducts" className="btn btn-outline btn-primary">
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
