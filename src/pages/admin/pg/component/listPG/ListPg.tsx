import { PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, List } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'src/app/hooks';
import { modalAction } from 'src/feature/modal/ModalSlice';
import { ModalComponentName } from 'src/utils/enums';

import './Styled.scss';

const ListPG = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  // const name: string = 'dashboard'

  const showAdd = () => {
    dispatch(
      modalAction.changeModalContentAndHandle({
        component: ModalComponentName.ADD_PG,
        dataState: data,
      })
    );
    dispatch(modalAction.showModal());
  };

  const data: Array<any> = [
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
          <h2>
            {t('listPg')}: {data.length}
          </h2>
          <Button type='primary' className='button_add' onClick={showAdd}>
            ADD
            <PlusOutlined />
          </Button>
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
