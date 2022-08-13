import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/specific/loading/Loading';
import { selectorLoadingListData } from 'src/feature/listData/ListSlice';
import Header from './component/header/Header';

import SideBar from './component/sideBar/SideBar';

import './Styled.scss';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loadingListData = useAppSelector(selectorLoadingListData);

  useEffect(() => {
    if (location.pathname === '/admin') return navigate('/admin/dashboard');
  }, []);

  return (
    <>
      <div id='admin-layout'>
        <SideBar />
        <div className='admin-layout_right'>
          <div className='admin-header'>
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
      {loadingListData && <Loading />}
    </>
  );
};

export default AdminLayout;
