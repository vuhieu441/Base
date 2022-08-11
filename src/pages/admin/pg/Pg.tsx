import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import './Styled.scss';

const PG = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin/pg') return navigate('/admin/pg/list-pg');
  }, []);

  return (
    <>
      <div id='pg'>
        <Outlet />
      </div>
    </>
  );
};

export default PG;
