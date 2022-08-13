import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { listActions } from 'src/feature/listData/ListSlice';
import { modalAction, selectModalDataState } from 'src/feature/modal/ModalSlice';

import './Styled.scss';

const CreatePG = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const dataState = useAppSelector(selectModalDataState);

  const [animationClose, setAnimationClose] = useState('');
  const handleCloseModal = () => {
    setAnimationClose('close');
    setTimeout(() => {
      dispatch(modalAction.hideModal());
    }, 200);
  };

  const onFinish = (values: object) => {
    console.log('Received values of form: ', values);
    if (values !== {}) {
      dispatch(listActions.fetchListData());
      axios
        .post('http://localhost:5000/todos', values)
        .then(() => {
          handleCloseModal();
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
    }
    return;
  };

  const onFinishUpdate = (values: object) => {
    console.log('Received values of edit form: ', values);
    if (values !== {}) {
      dispatch(listActions.fetchListData());
      axios
        .put(`http://localhost:5000/todos/${dataState.id}`, values)
        .then(() => {
          handleCloseModal();
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
    }
    return;
  };

  return (
    <>
      <div id='create-pg'>
        {dataState === undefined && (
          <div className={`createPG ${animationClose}`}>
            <div className='title'>
              <h1>{t('add')}</h1>
            </div>
            <div className='content'>
              <Form onFinish={onFinish}>
                <Form.Item name='title'>
                  <Input className='input' placeholder='Title' />
                </Form.Item>
                <Form.Item>
                  <div className='button'>
                    <Button className='close-button' onClick={handleCloseModal}>
                      Close
                    </Button>
                    <Button className='add-button' type='primary' htmlType='submit'>
                      Add
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
        {dataState && (
          <div className={`createPG ${animationClose}`}>
            <div className='title'>
              <h1>Edit</h1>
            </div>
            <div className='content'>
              <Form
                onFinish={onFinishUpdate}
                initialValues={{
                  ['title']: dataState.title,
                }}
              >
                <Form.Item name='title'>
                  <Input className='input' placeholder='Title' />
                </Form.Item>
                <Form.Item>
                  <div className='button'>
                    <Button className='close-button' onClick={handleCloseModal}>
                      Close
                    </Button>
                    <Button className='add-button' type='primary' htmlType='submit'>
                      Add
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreatePG;
