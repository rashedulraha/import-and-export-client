import React, { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { _id } = product;
  const moralRefUse = useRef(null);
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  // Fetch bids for this product
  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await fetch(
          `https://smart-deals-app.vercel.app/products/bids/${_id}`
        );
        const data = await res.json();
        // Check if data is array or inside an object
        setBids(Array.isArray(data) ? data : data.bids || []);
      } catch (err) {
        console.error("Error fetching bids:", err);
      }
    };
    fetchBids();
  }, [_id]);

  const handleMoralUse = () => {
    moralRefUse.current?.showModal();
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bit = form.bit.value;

    if (!bit || isNaN(bit) || Number(bit) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Bid",
        text: "Please enter a valid bid amount.",
      });
      return;
    }

    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: Number(bit),
      status: "pending",
    };

    try {
      const res = await fetch("https://smart-deals-app.vercel.app/bids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBid),
      });
      const data = await res.json();

      moralRefUse.current?.close();
      form.reset();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your bid has been placed!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Add bid with returned _id
      setBids((prev) => [...prev, { ...newBid, _id: data.insertedId }]);
    } catch (err) {
      console.error("Error saving bid:", err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not place bid. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Product Details */}{" "}
      <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
        {" "}
        <h1 className="text-2xl font-bold mb-3 text-primary">
          {product.title}
        </h1>
        {product.product_image ? (
          <img
            src={product.product_image}
            alt={product.title}
            className="w-full max-w-md rounded-lg"
          />
        ) : (
          <div className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            {" "}
            <span>No image available</span>{" "}
          </div>
        )}{" "}
        <p className="text-lg font-semibold mt-4">
          Price: <span className="text-primary">${product.price}</span>{" "}
        </p>{" "}
      </div>
      {/* Import / Bid Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleMoralUse}
          className="btn btn-primary px-6 py-3 font-medium rounded-lg">
          I want to import this product
        </button>
      </div>
      {/* Bid Modal */}
      <dialog ref={moralRefUse} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">
            Give Seller Your Offered Price!
          </h3>

          <form onSubmit={handleBidSubmit} className="space-y-4">
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                readOnly
                defaultValue={user?.displayName || ""}
              />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                readOnly
                defaultValue={user?.email || ""}
              />
            </div>

            <div>
              <label className="label font-medium">Bid Amount (USD)</label>
              <input
                type="number"
                name="bit"
                className="input input-bordered w-full"
                placeholder="e.g. 1500"
                min="1"
                step="1"
                required
              />
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => moralRefUse.current?.close()}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Place Bid
              </button>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* Bids List */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4 text-primary">
          Bids for This Product ({bids.length})
        </h2>

        {bids.length === 0 ? (
          <p className="text-base-content/70">No bids yet. Be the first!</p>
        ) : (
          <div className="grid gap-3">
            {bids.map((bid) => (
              <div
                key={bid._id}
                className="bg-base-200 p-4 rounded-lg border border-base-300">
                <p>
                  <strong>{bid.buyer_name}</strong> offered{" "}
                  <strong className="text-primary">${bid.bid_price}</strong>
                </p>
                <p className="text-sm text-base-content/70">
                  {bid.buyer_email}
                </p>

                <span
                  className={`badge ${
                    bid.status === "pending" ? "badge-warning" : "badge-success"
                  } mt-2`}>
                  {bid.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDetails;
