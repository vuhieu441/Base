import { Navigate } from 'react-router-dom';

const Landing = () => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to='/admin/dashboard' /> : <h1>Landing page</h1>;
};

export default Landing;
