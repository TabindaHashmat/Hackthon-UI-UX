import React from "react";

const products = {
  planters: [
    { id: 1, name: "Modern Planter", price: "$25", discount: "10%", image: "/planter1.jpg" },
    { id: 2, name: "Hanging Planter", price: "$30", discount: "15%", image: "/planter2.jpg" },
  ],
  ceramics: [
    { id: 1, name: "Ceramic Vase", price: "$40", discount: "20%", image: "/ceramic1.jpg" },
    { id: 2, name: "Ceramic Bowl", price: "$15", discount: "5%", image: "/ceramic2.jpg" },
  ],
  // Add more categories...
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const items = products[category] || [];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold capitalize mb-4">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md p-4 rounded-md">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-500">Price: {item.price}</p>
            <p className="text-sm text-red-500">Discount: {item.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
