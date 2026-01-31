import React from 'react';
import Banner from '../../components/Banner/Banner';
import Shoes from '../Shoes/Shoes';

import { useLoaderData } from 'react-router';

const Home = () => {
      const data =useLoaderData()
      return (
            <div>
                  <Banner></Banner>
                  <Shoes data={data}></Shoes>
                  
            </div>
      );
};

export default Home;