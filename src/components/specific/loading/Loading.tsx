import { useAppSelector } from 'src/app/hooks';

import { selectLoadingLogin } from 'src/feature/auth/loginSlice';

import './Styled.scss';

const Loading = () => {
  return (
    <>
      (
      <div id='loading'>
        <div className='loader loader1'>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Loading;
