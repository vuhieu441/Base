import { LogoutOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

import { sideBarRouter } from 'src/utils/router';

import './Styled.scss';

const SideBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logOut = () => {
    localStorage.clear();
    notification['success']({
      message: `Đăng xuất thành công`,
      description: 'Bạn đang ở trang login',
      placement: 'bottomLeft',
    });
    navigate('/auth/login');
  };

  return (
    <>
      <div id='side-bar'>
        <div className='side-bar_logo'>
          <img src='https://www.greenify.com.vn/static/media/greenify-menu.8064e2ac.svg' alt='logo' />
        </div>
        <ul className='menu-ul'>
          {sideBarRouter.map((item, idx) => {
            return (
              <NavLink className='menu-li' key={idx} to={`${item.path}`}>
                <li>{t(`admin.sideBar.${item.label}`)}</li>
              </NavLink>
            );
          })}
        </ul>
        <div className='side-bar_logout'>
          <Button className='login-form-button' type='text' onClick={logOut}>
            <LogoutOutlined />
            {t('admin.auth.logOut')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
