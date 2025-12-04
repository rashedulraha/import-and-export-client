import React from "react";

const AddProduct = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = {
      productImage: e.target.name.value,
      productName: e.target.name.value,
      price: e.target.name.value,
      originCountry: e.target.value,
      availableQuantity: e.target.value,
    };
    console.log(formData);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-base-200 px-4 py-8">
      <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
        <div className="card-body p-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">
            My Export
          </h2>

          <form onSubmit={handelSubmit}>
            <fieldset className="space-y-4">
              <div>
                <label htmlFor="imageUrl" className="label text-sm font-medium">
                  Product Image
                </label>
                <input
                  id="imageUrl"
                  type="url"
                  name="imageUrl"
                  className="input input-bordered w-full input-sm"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="productName"
                  className="label text-sm font-medium">
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  name="productName"
                  className="input input-bordered w-full input-sm"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="label text-sm font-medium">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full input-sm"
                  placeholder="0.00"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="originCountry"
                  className="label text-sm font-medium">
                  Origin Country
                </label>
                <input
                  id="originCountry"
                  type="text"
                  name="originCountry"
                  className="input input-bordered w-full input-sm"
                  placeholder="Origin Country"
                  required
                />
              </div>

              <div>
                <label htmlFor="rating" className="label text-sm font-medium">
                  Rating
                </label>
                <input
                  id="rating"
                  type="text"
                  name="rating"
                  className="input input-bordered w-full input-sm"
                  placeholder="e.g. 4.5/5"
                  required
                />
              </div>

              <div>
                <label htmlFor="quantity" className="label text-sm font-medium">
                  Available Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  min="0"
                  className="input input-bordered w-full input-sm"
                  placeholder="0"
                  required
                />
              </div>

              <button type="submit" className="gradient-btn w-full btn-sm mt-2">
                Add Product
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddProduct;
