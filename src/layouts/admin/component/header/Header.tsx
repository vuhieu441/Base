import Cookies from 'js-cookie';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_CODE, LANGUAGE_DROPDOWN_DATA } from 'src/utils/constants';

import './Styled.scss';

const Header = () => {
  const { i18n } = useTranslation();

  const currentLanguageCode = Cookies.get('i18next') || 'vi';
  const currentLanguage = LANGUAGE_DROPDOWN_DATA.find((language) => language.code === currentLanguageCode);

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['3']}
      onClick={(e) => {
        i18n.changeLanguage(LANGUAGE_CODE[parseInt(e.key)]);
      }}
      items={[
        {
          key: '0',
          label: 'Tiếng Việt',
        },
        {
          key: '1',
          label: 'English',
        },
      ]}
    />
  );

  return (
    <>
      <div id='admin-header'>
        <Dropdown overlay={menu}>
          <Typography.Link>
            <Space>
              <span className='language'>{currentLanguage?.name}</span>
              <DownOutlined className='icon' />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
    </>
  );
};

export default Header;
