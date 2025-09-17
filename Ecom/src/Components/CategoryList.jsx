import React from "react";

export const CategoryList = ({ categories, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.length > 0 ? (
        categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => onSelect(cat)}
          >
            <h2 className="text-xl font-semibold">{cat.name}</h2>
            <p className="text-gray-500">{cat.products.length} items</p>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          No categories found
        </p>
      )}
    </div>
  );
};
