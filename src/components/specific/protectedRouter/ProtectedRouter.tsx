import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  Component: any;
};

const ProtectedRouter: React.FC<Props> = (props) => {
  const token = localStorage.getItem('token');
  const { Component } = props;

  return token !== null && token !== '' ? <Component /> : <Navigate to={`/auth`} />;
};

export default ProtectedRouter;
