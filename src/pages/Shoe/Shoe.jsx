import React from 'react';

const Shoe = ({ SingleShoe }) => {
  const { productName, brand, image, price, rating, stock, shopName, tags } = SingleShoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group">
      {/* Image Section with Badge */}
      <figure className="relative overflow-hidden pt-4 px-4">
        <img
          src={image}
          alt={productName}
          className="rounded-2xl h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {stock > 0 ? (
          <div className="absolute top-8 right-8 badge badge-success gap-2 text-white">In Stock</div>
        ) : (
          <div className="absolute top-8 right-8 badge badge-error gap-2 text-white">Out of Stock</div>
        )}
      </figure>

      <div className="card-body gap-1">
        {/* Brand & Rating Row */}
        <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          <span>{brand}</span>
          <span className="flex items-center gap-1 text-orange-400">
            ⭐ {rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-2xl font-bold">{productName}</h2>
        
        {/* Shop Info */}
        <p className="text-sm text-gray-500 italic">Sold by: {shopName}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-2">
          {tags?.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm opacity-70">
              #{tag}
            </span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="text-2xl font-black text-primary">
            ${price}
          </div>
          <button className="btn btn-primary btn-md rounded-lg hover:scale-105 active:scale-95 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shoe;