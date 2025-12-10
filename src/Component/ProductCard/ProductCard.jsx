import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-compact w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Origin</th>
            <th>Rating</th>
            <th>Stock Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="avatar">
                  <div className="w-17 h-17 rounded">
                    <img
                      src={product.product_image}
                      alt={product.product_name}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/100x100.png?text=No+Img";
                      }}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{product.product_name}</div>
              </td>
              <td>${product.price}</td>
              <td>{product.origin_country || "N/A"}</td>
              <td>{product.rating || "N/A"} </td>
              <td>
                {product.available_quantity > 0 ? (
                  <span className="badge badge-success badge-sm">
                    {product.available_quantity} in stock
                  </span>
                ) : (
                  <span className="badge badge-error badge-sm">
                    Out of stock
                  </span>
                )}
              </td>
              <td>
                <button className="btn btn-primary btn-sm">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
