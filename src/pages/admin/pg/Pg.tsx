import { Outlet } from 'react-router-dom';

import './Styled.scss';

const PG = () => {
  return (
    <>
      <div id='pg'>
        <Outlet />
      </div>
    </>
  );
};

export default PG;
