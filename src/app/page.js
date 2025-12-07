import React from 'react';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          id={1}
          title="Stylish Sneakers"
          price={4999}
          image="/images/sneakers.jpg"
          category="Footwear"
        />
        <ProductCard
          id={2}
          title="Elegant Watch"
          price={12999}
          image="/images/watch.jpg"
          category="Accessories"
        />
        <ProductCard
          id={3}
          title="Leather Jacket"
          price={8999}
          image="/images/jacket.jpg"
          category="Apparel"
        />
      </div>
    </main>
  );
};
