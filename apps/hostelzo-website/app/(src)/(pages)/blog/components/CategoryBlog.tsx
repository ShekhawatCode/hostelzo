import React from 'react';
import CategoryCard from './CategoryCard';

type Props = object;

const CategoryBlog = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black">Categories</h1>
      <div className="flex mt-6 mb-8 space-x-6">
        <button className="px-6 py-3 border rounded-full border-gray-dim">
          All
        </button>
        <button className="px-6 py-3 border rounded-full border-gray-dim">
          Stays
        </button>
        <button className="px-6 py-3 border rounded-full border-gray-dim">
          Zostel
        </button>
      </div>
      <CategoryCard />
      <button className="px-6 py-3 mt-12 border rounded-lg border-gray-dim">
        View More
      </button>
    </div>
  );
};

export default CategoryBlog;
