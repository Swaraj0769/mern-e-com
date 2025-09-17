import React, { useState } from "react";

export const ProductList = ({ category, onBack }) => {
  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = category.products.filter((prod) =>
    prod.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="mt-8">
      <button
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900"
        onClick={onBack}
      >
        ← Back to Categories
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {category.name} - Products
      </h2>

      {/* Sub Search for Products */}
      <input
        type="text"
        placeholder={`Search in ${category.name}...`}
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        className="border rounded-lg p-2 w-80 mb-6 shadow-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-md"
            >
              <h3 className="text-lg font-medium">{prod.name}</h3>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};
