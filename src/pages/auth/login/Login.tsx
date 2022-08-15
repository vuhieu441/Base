import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'src/app/hooks';

import { login } from 'src/feature/auth/loginSlice';

import './Styled.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (values: object) => {
    console.log('Received values of form: ', values);
    dispatch(login(values))
      .unwrap()
      .then(() => {
        notification['success']({
          message: `Đăng nhập thành công`,
          description: 'Bạn đang ở trang dashboard',
          placement: 'bottomLeft',
          duration: 1,
        });
        navigate('/admin/dashboard');
      })
      .catch((error) => {
        notification['error']({
          message: `${error.message}`,
          description: 'Nhập lại tài khoản, mật khẩu đi bạn ơi !!!',
          placement: 'bottomLeft',
          duration: 1,
        });
      });
  };

  return (
    <div id='login'>
      <div className='login-header'>
        <span className='login-header_h1'>Sign In.</span>
        <span className='login-header_title'>Enter your email and password to sign in</span>
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
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input className='form-input' prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Email' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
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

        <Form.Item>
          <div className='remember'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className='login-form-forgot' to='/auth/forgot-password'>
              Forgot password
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
        </Form.Item>

        <Form.Item>
          <div className='register'>
            Or <Link to='/auth/register'>register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
