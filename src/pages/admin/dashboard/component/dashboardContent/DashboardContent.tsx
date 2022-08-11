import { Translation } from 'react-i18next';
import Chart from '../chart/Chart';
import './Styled.scss';

const DashboardContent = () => {
  return (
    <>
      <div id='dashboard-content'>
        <div className='title'>
          <Translation>{(t, { i18n }) => <h2>{t('dashboardPage')}</h2>}</Translation>
        </div>
        <Chart />
      </div>
    </>
  );
};

export default DashboardContent;
