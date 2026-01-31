import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';

const ShoeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  // Find the specific shoe by ID
  // Note: useParams returns a string, so we convert it to a Number
  const shoe = data?.find((item) => item.productId === parseInt(id));

  if (!shoe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Shoe not found!</h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  const { productName, brand, image, price, rating, stock, shopName, tags, description, availableSizes, category } = shoe;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="btn btn-ghost mb-6 gap-2">
          ← Back to Collection
        </button>

        <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden">
          {/* Image Section */}
          <figure className="lg:w-1/2 bg-gray-100 p-8">
            <img 
              src={image} 
              alt={productName} 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
            />
          </figure>

          {/* Details Section */}
          <div className="card-body lg:w-1/2 p-10">
            <div className="flex justify-between items-start">
              <div>
                <span className="badge badge-primary font-bold uppercase mb-2">{brand}</span>
                <h1 className="card-title text-4xl font-black">{productName}</h1>
                <p className="text-sm opacity-60 mt-1">{category} • Sold by {shopName}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-secondary">${price}</div>
                <div className="badge badge-ghost mt-2">⭐ {rating}</div>
              </div>
            </div>

            <div className="divider"></div>

            <p className="text-lg leading-relaxed text-base-content/80">
              {description}
            </p>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Select Size (US)</h3>
              <div className="flex flex-wrap gap-3">
                {availableSizes?.map((size) => (
                  <button key={size} className="btn btn-outline btn-sm hover:btn-primary w-12">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex gap-2">
              {tags?.map(tag => (
                <div key={tag} className="badge badge-neutral badge-outline">#{tag}</div>
              ))}
            </div>

            {/* Actions */}
            <div className="card-actions mt-10 flex-col sm:flex-row gap-4">
              <button className="btn btn-primary flex-1 btn-lg shadow-lg shadow-primary/20">
                Add to Cart
              </button>
              <div className="flex items-center gap-2 px-4 text-sm font-medium">
                <span className={`w-3 h-3 rounded-full ${stock > 0 ? 'bg-success' : 'bg-error'}`}></span>
                {stock} units left in stock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetails;