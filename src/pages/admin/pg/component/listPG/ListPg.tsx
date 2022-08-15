import { DeleteFilled, EditFilled, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Modal } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import axios from 'axios';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { listActions, selectorListData } from 'src/feature/listData/ListSlice';
import { modalAction } from 'src/feature/modal/ModalSlice';

import { ModalComponentName } from 'src/utils/enums';

import './Styled.scss';

const ListPG = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const listData: Array<any> = useAppSelector(selectorListData);

  useEffect(() => {
    dispatch(listActions.fetchListData());
    setTimeout(() => {
      axios
        .get('http://localhost:5000/todos')
        .then((res) => {
          dispatch(listActions.fetchListDataSuccess(res.data));
        })
        .catch((error) => {
          dispatch(listActions.fetchListDataFailed());
        });
    }, 1000);
  }, [dispatch]);

  const showAdd = () => {
    dispatch(
      modalAction.changeModalContentAndHandle({
        component: ModalComponentName.ADD_PG,
      })
    );
    dispatch(modalAction.showModal());
  };

  const handleUpdate = (e: Number) => {
    dispatch(
      modalAction.changeModalContentAndHandle({
        component: ModalComponentName.ADD_PG,
        dataState: e,
      })
    );
    dispatch(modalAction.showModal());
  };

  const handleDelete = (e: Number) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: false,
      },
      cancelText: 'No',

      onOk() {
        console.log('OK');
        dispatch(listActions.fetchListData());
        setTimeout(() => {
          axios
            .delete(`http://localhost:5000/todos/${e}`)
            .then((res) => {
              setTimeout(() => {
                axios
                  .get('http://localhost:5000/todos')
                  .then((res) => {
                    dispatch(listActions.fetchListDataSuccess(res.data));
                  })
                  .catch((error) => {
                    dispatch(listActions.fetchListDataFailed());
                  });
              }, 1000);
            })
            .catch((error) => {
              dispatch(listActions.fetchListDataFailed());
            });
        }, 1000);
      },

      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <div id='list-pg'>
        <div className='title'>
          <h2>
            {t('admin.pg.listPg')}: {listData.length}
          </h2>
          <Button type='primary' className='button_add' onClick={showAdd}>
            {t('admin.pg.add')}
            <PlusOutlined />
          </Button>
        </div>
        <List
          itemLayout='horizontal'
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <div className='button' onClick={() => handleDelete(item.id)}>
                  <DeleteFilled style={{ color: '#ff0000cc' }} />
                </div>,
                <div className='button' onClick={() => handleUpdate(item)}>
                  <EditFilled style={{ color: '#0099ffe0' }} />,
                </div>,
              ]}
            >
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
