import { Outlet } from 'react-router-dom';

import './Styled.scss';

const Dashboard = () => {
  return (
    <>
      <div id='dashboard'>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
