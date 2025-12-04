import React, { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";

const MyExport = () => {
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
          Our <span className="text-primary">Featured Products</span>
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-base-content/70">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyExport;
