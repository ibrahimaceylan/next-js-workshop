import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();

  console.log('router.query', router.query);

  const { params } = router.query;

  return params ? (
    <div>
      The title of {params[0]}. post is {params[1]}
    </div>
  ) : (
    <p>No record</p>
  );
};

export default Post;
