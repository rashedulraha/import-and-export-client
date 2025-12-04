import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://smart-deals-app.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-base-content/70 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          All <span className="text-primary">Products</span>
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-base-content/70">No products found.</p>
        ) : (
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
                    Price:{" "}
                    <span className="font-semibold">${product.price}</span>
                  </p>
                  <p className="text-base-content/80">
                    Origin: {product.origin_country || "N/A"}
                  </p>
                  <p className="text-base-content/80">
                    Rating: {product.rating || "N/A"} ⭐
                  </p>
                  <p
                    className={`text-sm font-medium mt-1 ${
                      product.available_quantity > 0
                        ? "text-success"
                        : "text-error"
                    }`}>
                    {product.available_quantity > 0
                      ? `${product.available_quantity} in stock`
                      : "Out of stock"}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/products-details/${product._id}`}
                      className="btn btn-primary btn-block">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
