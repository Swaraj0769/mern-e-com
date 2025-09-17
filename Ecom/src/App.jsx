import React, { useState } from "react";
import { CategoryList } from "./Components/CategoryList";
import { ProductList } from "./Components/ProductList";

const data = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Mobile Phones" },
      { id: 102, name: "Laptops" },
      { id: 103, name: "Headphones" },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    products: [
      { id: 201, name: "Shirts" },
      { id: 202, name: "Jeans" },
      { id: 203, name: "Shoes" },
    ],
  },
  {
    id: 3,
    name: "Books",
    products: [
      { id: 301, name: "Fiction" },
      { id: 302, name: "Non-fiction" },
      { id: 303, name: "Comics" },
    ],
  },
];

export default function App() {
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = data.filter((cat) =>
    cat.name.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">E-Commerce Store</h1>

      {/* Main Search for Categories */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Categories..."
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="border rounded-lg p-2 w-80 shadow-md"
        />
      </div>

      {/* Category List */}
      <CategoryList
        categories={filteredCategories}
        onSelect={setSelectedCategory}
      />

      {/* Sub-category Products */}
      {selectedCategory && (
        <ProductList
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}
