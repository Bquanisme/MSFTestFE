import '../../styles/badge.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import type { IBadgeBoxs, ILinkBoxs } from '../../typescript/home';

export const NotificationsBadge = () => {
  return (
    <div className="icon-badge">
        <NotificationsIcon
            sx={{ color: "#969494", cursor: "pointer" }}
        />

        <span className="error-badge">3</span>
    </div>
  )
}

export const EmailBadge = () => {
  return (
    <div className="icon-badge">
        <EmailIcon sx={{color: "#969494", cursor: 'pointer'}}/>

        <span className="info-badge">5</span>
    </div>
  )
}

interface IBadgeProps {
  box: IBadgeBoxs;
}

export const BoxBadge = ({box}: IBadgeProps) => {
  return (
    <div className="icon-badge">
        <span className="box-badge">
          {box.number ?? 0}
        </span>
    </div>
  )
}

interface IProps {
  box: ILinkBoxs;
}

export const LinkBadge = ({ box }: IProps) => {
  return (
    <div className="icon-badge">
      <span className="box-badge">
        {box.count ?? 0}
      </span>
    </div>
  );
};


export const EmailPositionBadge = () => {
  return (
    <div className="icon-badge-background-1">
        <EmailIcon sx={{color: "#ffffff", cursor: 'pointer'}}/>

        <span className="error-badge">99+</span>
    </div>
  )
}

export const NotificationPositionBadge = () => {
  return (
    <div className="icon-badge-background-2">
        <EmailIcon sx={{color: "#ffffff", cursor: 'pointer'}}/>

        <span className="error-badge"></span>
    </div>
  )
}
