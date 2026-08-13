import { dashboard } from '../../mocks/dashboardApi';
import '../../styles/pageStyles/dashboard.css'
import '../../styles/pageStyles/DashboardBottom.css';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardCharts from '../../components/chart/DashboardChart';
import RecentActivities from './recentActivities';
import TopProducts from './topProduct';


function DashboardPage() {
  
  const icons = [
    <AttachMoneyIcon />,
    <ShoppingCartIcon />,
    <GroupsIcon />,
    <TrendingUpIcon />,
  ];

  return (
    <div className="dashboard-section">
      <div className="dashboard-cards">

          {dashboard.map((item, index) => (
            <div
              key={item.id}
              className={`dashboard-card dashboard-card-${index + 1}`}
            >
              <div className="dashboard-card-content">

                {index === 0 ? (
                  <h2 className="dashboard-card-cost">
                    ${item.cost.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                  </h2>
                ) : index === 3 ? (
                  <h2 className="dashboard-card-cost">
                    {item.cost.toLocaleString()}%
                  </h2>
                ) : (
                  <h2 className="dashboard-card-cost">
                    {item.cost.toLocaleString()}
                  </h2>
                )}

              <p className="dashboard-card-title">
                {item.title}
              </p>

              <div className="dashboard-card-change">
                {item.isIncrease ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}

                <span>{item.percent}</span>
              </div>

            </div>

            <div className="dashboard-card-icon">
              {icons[index]}
            </div>
          </div>
        ))}

      </div>

       <DashboardCharts />

       
       <div className="dashboard-bottom">
            <RecentActivities />
            <TopProducts />
        </div>

    </div>
  );
}

export default DashboardPage;