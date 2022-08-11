import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';

import './Styled.scss';

const ForgotPassword = () => {
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
      <div id='forgot-password'>
        <div className='login-header'>
          <span className='login-header_h1'>Forgot Password.</span>
          <span className='login-header_title'>Enter your email to forgot password</span>
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
            <Input
              className='form-input'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>

          <Form.Item>
            <div className='forgot-password_button'>
              <Button className='login-form-button'>
                <ArrowLeftOutlined />
                <Link to='/auth/login' className='font'>
                  Sign In
                </Link>
              </Button>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Send Mail
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
