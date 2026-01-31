import React from 'react';

const Shoe = ({SingleShoe}) => {

      const {productName,brand,image} = SingleShoe;
      console.log(SingleShoe)
      return (
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>{brand}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      );
};

export default Shoe;