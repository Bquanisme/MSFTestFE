import { basicButton } from '../../../mocks/componentApi/buttonApi'
import '../../../styles/pageStyles/components/button.css'
import '../../../styles/pageStyles/components/badges.css'
import { badgeBoxs, buttonStatusBadge, flatBadges, flatColorPillBadges, linkBadges, navigationBadges, outlineBadges, smallBadges } from '../../../mocks/componentApi/badgeApi'
import { BoxBadge, EmailPositionBadge, LinkBadge, NotificationPositionBadge } from '../../../components/badge/Badge'

import DoneIcon from '@mui/icons-material/Done';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import ClearIcon from '@mui/icons-material/Clear';
import PauseIcon from '@mui/icons-material/Pause';
import BlockFlippedIcon from '@mui/icons-material/BlockFlipped';
import { BadgeComponentBreadcrumb } from '../../../components/Breadcrumb'


const icon = {
  active: <DoneIcon sx={{width: '15px', height: '15px'}}/>,
  pending: <WatchLaterRoundedIcon sx={{width: '15px', height: '15px'}}/>,
  inactive: <ClearIcon sx={{width: '15px', height: '15px'}}/>,
  processing: <WatchLaterRoundedIcon sx={{width: '15px', height: '15px'}}/>,
  paused: <PauseIcon sx={{width: '15px', height: '15px'}}/>,
  blocked: <BlockFlippedIcon sx={{width: '15px', height: '15px'}}/>
}


const BadgetsPage = () => {
  return (
    <div className='section'>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Badges</h2>
        <BadgeComponentBreadcrumb/>
      </div>
        <div className='box-row-1'>
          <div className='box-row-1-column-1'>
  
            <h3>Basic Badges</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='badges-row'>
                {basicButton.map(badges => (
                  <div key={badges.id} className={`badges-${badges.id}`}>
                    <p>{badges.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className='box-row-1-column-1'>
            
            <h3>Flat Color Badges</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='badges-row'>
                {flatBadges.map(data => (
                  <div key={data.id} className={`flat-badges-${data.id}`}>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  


        <div className='box-row-2'>
          <div className='box-row-1-column-1'>
  
            <h3>Badge Sizes</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
  
              <div className='badges-row-2'>
                <h1 style={{ fontSize: '35px' }}>
                  Large Heading
                </h1>

                <div className='badges-large-1'>
                  <h1>New</h1>
                </div>
              </div>

              <div className='badges-row-2'>
                <h1>Heading 2</h1>

                <div className='badges-large-2'>
                  <h2>New</h2>
                </div>
              </div>

              <div className='badges-row-2'>
                <h2>Heading 3</h2>

                <div className='badges-large-3'>
                  <h3>New</h3>
                </div>
              </div>

              <div className='badges-row-2'>
                <h3>Heading 4</h3>

                <div className='badges-large-4'>
                  <h4>New</h4>
                </div>
              </div>

              <div className='badges-row-2'>
                <h4>Heading 5</h4>

                <div className='badges-large-5'>
                  <h5>New</h5>
                </div>
              </div>

              <div className='badges-row-2'>
                <h5>Small Heading</h5>

                <div className='badges-large-6'>
                  <h6>New</h6>
                </div>
              </div>
            </div>
          </div>
          
          <div className='box-row-1-column-1'>
  
            <h3>Pill Badges</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='badges-row'>
                {basicButton.map(badges => (
                  <div key={badges.id} className={`pill-badges-${badges.id}`}>
                    <p>{badges.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



        <div className='box-row-1'>
          <div className='box-row-1-column-1'>
                    
          <h3>Badges in Buttons</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className="badges-button">
              {badgeBoxs.map(box => (
                <button
                  key={box.id}
                  className={`button-badge-${box.id}`}
                >
                  <span>{box.title}</span>
                  <span>
                    <BoxBadge box={box}/>
                  </span>

                </button>
              ))}
            </div>
          </div>
        </div>
          
          <div className='box-row-1-column-1'>
            
            <h3>Flat Color Pill Badges</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='badges-row'>
                {flatColorPillBadges.map(data => (
                  <div key={data.id} className={`flat-badges-${data.id}`}>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className='box-row-5'>
          <h3>Badge Counters and Notifications</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='box-row-6'>
            <div className='box-table'>    
              <div className='button-margin'>
                <div className="navigation-badges">
                  <h3>Navigation with Badges</h3>

                  <div className="navigation-list">
                    {navigationBadges.map((item) => (
                      <div className="navigation-item" key={item.id}>
                        <span>{item.name}</span>

                        <span className={`navigation-badge ${item.type}`}>
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
            <div className='box-row-1-column-1'>    
              <div className='button-margin'>
                <div className="navigation-badges">
                  <h3>Status Badges</h3>

                  <div className="button-row">
                    {buttonStatusBadge.map((button) => (
                      <div
                        key={button.id}
                        className={`status-badge-${button.id}`}
                      >
                        {button.iconPosition === 'left' && (
                          <span className="button-icon-social">   
                            {icon[button.icon]}
                          </span>
                        )}
        
                        <span>{button.title}</span>
                      </div>
                    ))}
                  </div><br />

                  <h3>Link Badges</h3>

                  <div className="button-row">
                    {linkBadges.map(box => (
                      <button
                        key={box.id}
                        className={`link-badge-${box.id}`}
                      >
                        <span><a href="#" style={{textDecoration: 'none', color: 'white'}}>{box.name}</a></span>
                        <span>
                          <LinkBadge box={box}/>
                        </span>

                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='box-row-5'>
          <h3>Badge Counters and Notifications</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='box-row-7'>
            <div className='box-row-1-column-1'>    
              <div className='button-margin'>
                <div className="navigation-badges">
                  <h3>Small Badges</h3>

                  <div className="badge-row-end">
                    {smallBadges.map((badge) => (
                      <div
                        key={badge.id}
                        className={`small-badge-${badge.id}`}
                      >
                      <span>{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
            <div className='box-row-1-column-1'>    
              <div className='button-margin'>
                <div className="navigation-badges">
                  <h3>Outlined Badges</h3>

                  <div className="badge-row-end">
                    {outlineBadges.map((badge) => (
                      <div
                        key={badge.id}
                        className={`small-outline-badge-${badge.id}`}
                      >
                      <span>{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='box-row-1-column-1'>    
              <div className='button-margin'>
                <div className="navigation-badges">
                  <h3>Position Badges</h3>

                  <div className="badges-row-2">
                    <EmailPositionBadge/>
                    <NotificationPositionBadge/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BadgetsPage
