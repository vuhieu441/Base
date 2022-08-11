import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';

import './Styled.scss';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish = (values: object) => {
    console.log('Received values of form: ', values);
    // dispatch(forgot(values))
    //   .unwrap()
    //   .then(() => {
    //     notification['success']({
    //       message: `Đăng nhập thành công`,
    //       description: 'Bạn đang ở trang dashboard',
    //       placement: 'bottomLeft',
    //     });
    //     navigate('/admin/dashboard');
    //   })
    //   .catch(() => {
    //     notification['error']({
    //       message: `Tài khoản hoặc mật khẩu sai`,
    //       description: 'Nhập lại tài khoản, mật khẩu đi bạn ơi !!!',
    //       placement: 'bottomLeft',
    //     });
    //   });
  };
  return (
    <>
      <div id='register'>
        <div className='login-header'>
          <span className='login-header_h1'>Sign Up.</span>
          <span className='login-header_title'>Enter your email and password to sign up</span>
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please Input Your Email!',
              },
            ]}
          >
            <Input
              className='form-input'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please Input Your Password!',
              },
            ]}
          >
            <Input.Password
              className='form-input'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Please Input Your Confirm Password!',
              },
            ]}
          >
            <Input.Password
              className='form-input'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Confirm Password'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Already have an account? <Link to='/auth/login'>Sign In</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
