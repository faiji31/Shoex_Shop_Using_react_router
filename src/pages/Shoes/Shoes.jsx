import React from 'react';
import { Suspense } from 'react';
import Shoe from '../Shoe/Shoe';

const Shoes = ({data}) => {
      return (
            
            <div>
                  <h1 className='text-3xl text-center p-6'>Shoes</h1>
                  <div className='grid grid-cols-3 gap-5'>
                        <Suspense fallback={<div>Loading...</div>}>
                  {data.map(SingleShoe => <Shoe key={SingleShoe.id} SingleShoe={SingleShoe}></Shoe>)}

                  </Suspense>
                  </div>
            </div>
      );
};

export default Shoes;