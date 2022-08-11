import { Avatar, List } from 'antd';
import { useTranslation } from 'react-i18next';

import './Styled.scss';

const ListPG = () => {
  const { t } = useTranslation();
  // const name: string = 'dashboard'
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <>
      <div id='list-pg'>
        <div className='title'>
          <h2>{t('listPg')}: 4</h2>
          {/* <span>{t(`${name}`)}</span> */}
        </div>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={<a href='https://ant.design'>{item.title}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED Team'
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default ListPG;
