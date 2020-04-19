import React from 'react';
import { useRouter } from 'next/router';

const Order = () => {
  const router = useRouter();

  console.log('router.query', router.query);

  const { slug } = router.query;

  return slug ? <div>Order slug is {slug}</div> : <p>No record</p>;
};

export default Order;
