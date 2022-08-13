import { Trans, Translation, useTranslation } from 'react-i18next';
import Chart from '../chart/Chart';
import './Styled.scss';

const DashboardContent = () => {
  const { t } = useTranslation();
  // const name = 'Bằngfffff';

  return (
    <>
      <div id='dashboard-content'>
        <div className='title'>
          <Translation>{(t) => <h2>{t('dashboardPage')}</h2>}</Translation>
          {/* <Trans i18nKey='userMessagesUnread' count={30}>
            {{ name }}
          </Trans> */}
        </div>
        <div className='chart'>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
