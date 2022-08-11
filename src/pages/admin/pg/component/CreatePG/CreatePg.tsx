import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { modalAction } from 'src/feature/modal/ModalSlice';

import './Styled.scss';

const CreatePG = () => {
  const dispatch = useAppDispatch();
  const [animationClose, setAnimationClose] = useState('');
  const handleCloseModal = () => {
    setAnimationClose('close');
    setTimeout(() => {
      dispatch(modalAction.hideModal());
    }, 200);
  };

  const onFinish = (values: object) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div id='create-pg'>
        <div className={`createPG ${animationClose}`}>
          <div className='title'>
            <h1>ADD PG</h1>
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
      </div>
    </>
  );
};

export default CreatePG;
