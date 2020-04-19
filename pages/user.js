import React from 'react';

const User = ({ pageParams, custom }) => {
  if (process.env.DEBUG) {
    console.log('pageParams', pageParams);
    console.log('custom', custom);
  }
  const { id, name, surname } = pageParams;

  return pageParams ? (
    <div>{`The current user is ${name} ${surname} which has ${id} id.`}</div>
  ) : (
    <p>No user record</p>
  );
};

User.getInitialProps = ({ query }) => {
  console.log('ctx', query);

  return { pageParams: query, custom: 'blabla' };
};

export default User;
