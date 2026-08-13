import { useState } from 'react';
import { alertContent, alertDismiss, alertFirst, alertLink } from '../../../mocks/componentApi/alertApi';
import '../../../styles/pageStyles/components/alert.css';
import '../../../styles/pageStyles/components/badges.css';

import ClearIcon from '@mui/icons-material/Clear';
import { AlertComponentBreadcrumb } from '../../../components/Breadcrumb';

const AlertsPage = () => {

  const [alerts, setAlerts] = useState(alertDismiss);

  const handleClose = (id: number) => {
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === id
          ? { ...alert, isShow: false }
          : alert
      )
    );
  };
  return (
    <div className="section">

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Alerts</h2>
        <AlertComponentBreadcrumb/>
      </div>
      

      <div className="alert-row-1">

        {/* CỘT TRÁI */}
        <div className="alert-column">

          <div className="alert-box">
            <h3>Alerts</h3>

            <hr style={{borderTop: "1px solid #d0cccc"}}/>

            <br />

            {alertFirst.map(alert => (
              <div 
                key={alert.id} 
                className={`alert-background-${alert.id}`}
              > 
                <p>{alert.title}</p>
              </div>
            ))}
          </div>

          <div className="alert-box">
            <h3>Link Color Alerts</h3>

            <hr style={{borderTop: "1px solid #d0cccc"}}/>

            <br />

            {alertLink.map(alert => (
              <div 
                key={alert.id} 
                className={`alert-background-${alert.id}`}
              > 
                <p dangerouslySetInnerHTML={{
                  __html: alert.title,
                }}/>
              </div>
            ))}
          </div>

        </div>


        {/* CỘT PHẢI */}
        <div className="alert-column">

          <div className="alert-box">
            <h3>Dismissing Alerts</h3>

            <hr style={{borderTop: "1px solid #d0cccc"}}/>

            <br />

            {alerts.map(alert => {
              if (!alert.isShow) return null
              return (
              <div 
                key={alert.id} 
                className={`alert-background-${alert.id}`}
              > 

                <div className='alert-dismiss-row'>

                  <div className='badges-row'>

                    <div className={`badges-${alert.id}`}>
                      Success
                    </div>

                    <p style={{fontSize: '16px'}}>{alert.title}</p>

                  </div>

                  <div onClick={() =>  handleClose(alert.id)} style={{cursor: 'pointer'}}>
                    <ClearIcon/>

                  </div>

                </div>

              </div>
              )
            })}
          </div>

          <div className="alert-box">
            <h3>Contents</h3>

            <hr style={{borderTop: "1px solid #d0cccc"}}/>

            <br />

            {alertContent.map(alert => (
              <div 
                key={alert.id} 
                className={`alert-contents-${alert.id}`}
              > 
                <h2>{alert.title}</h2><br />
                <p>{alert.description}</p><br />
                <hr style={{borderTop: "1px solid #696767"}}/><br />
                <p>{alert.description2}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AlertsPage;