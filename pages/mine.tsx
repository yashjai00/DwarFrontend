import React, { useEffect, useState } from 'react';
import { products } from '../data/product';
import { useAddress } from '@thirdweb-dev/react';
import Layout from '../components/UI/Layout';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Store() {
  const address = useAddress();

  

  const [myPord, setMyProd] = useState([]);
  useEffect(() => {
    if(address){
      console.log("add", address );
      axios
      .post('/api/list', {
        address: address,
      })
      .then((res) => {
        console.log(res);
        setMyProd(res.data.list);
      });
    }
  }, [address]);

  return (
    <Layout>
      <p className="mt-16 mb-16 text-center font-semibold text-6xl">
        My orders
      </p>
      <div className="flex flex-wrap mt-10 mb-10 justify-center">
        {myPord.map((card, idx) => {
          return <ProductCard key={idx} card={card} />;
        })}
      </div>
    </Layout>
  );
}
