import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/specific/loading/Loading';
import { selectLoadingLogin } from 'src/feature/auth/loginSlice';

import './Styled.scss';

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const loadingLogin = useAppSelector(selectLoadingLogin);

  useEffect(() => {
    if (location.pathname === '/auth') return navigate('/auth/login');
  }, []);

  return token ? (
    <Navigate to='/admin/dashboard' />
  ) : (
    <>
      <div id='auth-layout'>
        <div className='auth-layout_right'>
          <Outlet />
          <div className='auth-info'>
            <span>Copyright © 2022 by Greenify VN company.</span>
          </div>
        </div>
        <div className='auth-layout_left'>
          <img src='https://www.kindpng.com/picc/m/83-837962_white-ferrari-car-png-image-car-images-hd.png' alt='img' />
        </div>
      </div>
      {loadingLogin && <Loading />}
    </>
  );
};

export default AuthLayout;
