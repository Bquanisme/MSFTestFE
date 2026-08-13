import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WarningIcon from '@mui/icons-material/Warning';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import {recentActivities} from '../../mocks/dashboardApi';

import '../../styles/pageStyles/dashboardBottom.css';

function RecentActivities() {
  const activityIcons = {
    order: <ShoppingBagIcon />,
    customer: <PersonAddIcon />,
    stock: <WarningIcon />,
    review: <ChatBubbleIcon />,
  };

  return (
    <div className="dashboard-bottom-card">
      <div className="bottom-card-header">
        <h3>Recent Activity</h3>
      </div>

      <div className="activity-list">
        {recentActivities.map((item) => (
          <div
            className="activity-item"
            key={item.id}
          >
            <div
              className={`activity-icon ${item.type}`}
            >
              {activityIcons[item.type]}
            </div>

            <div className="activity-content">
              <h4>{item.title}</h4>

              <p>
                {item.description}
              </p>

              <span>
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivities;