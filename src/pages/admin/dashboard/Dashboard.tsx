import { Trans, Translation, useTranslation } from 'react-i18next';
import Chart from 'src/pages/admin/dashboard/component/chart/Chart';
import './Styled.scss';

const Dashboard = () => {
  const { t } = useTranslation(); // const name = 'Bằngfffff'; return (

  return (
    <>
      <div id='dashboard'>
        <div className='title'>
          <Translation>{(t) => <h2>{t('admin.dashboard.dashboardPage')}</h2>}</Translation>
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

export default Dashboard;
