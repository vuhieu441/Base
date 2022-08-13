import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id='PageNotFound'>
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
          extra={
            <Button onClick={() => navigate('/auth/login')} type='primary'>
              Back Home
            </Button>
          }
        />
      </div>
    </>
  );
};

export default PageNotFound;
