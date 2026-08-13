import { basicButton, buttonGroupColumn, buttonGroupRaw, buttonIcons, buttonSocialMedia, flatButton, outlineButton, statesButton } from '../../../mocks/componentApi/buttonApi'
import '../../../styles/pageStyles/components/button.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ButtonComponentBreadcrumb } from '../../../components/Breadcrumb';

const icons = {
  star: <StarIcon />,
  favorite: <FavoriteIcon />,
  check: <CheckIcon />,
  warning: <WarningIcon />,
  delete: <DeleteIcon />,
};

const icon2 = {
  facebook: <FacebookIcon/>,
  twitter: <TwitterIcon/>,
  instagram: <InstagramIcon/>,
  github: <GitHubIcon/>,
  youtube: <YouTubeIcon/>,
  linkedin: <LinkedInIcon/>
}

const ButtonPage = () => {
  return (
    <div className="section">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Buttons</h2>
        <ButtonComponentBreadcrumb/>
      </div>
      
      <div className='box-row-1'>
        <div className='box-row-1-column-1'>

          <h3>Basic Buttons</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              {basicButton.map(button => (
                <button key={button.id} className={`button-${button.id}`}>
                  <p>{button.title}</p>
                </button>
              ))}
              <button className='button-9'>
                <a href="">Link</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className='box-row-1-column-1'>
          
          <h3>Flat Color Buttons</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              {flatButton.map(data => (
                <button key={data.id} className={`button-flat-${data.id}`}>
                  <p>{data.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='box-row-2'>
        <div className='box-row-1-column-1'>

          <h3>Button Sizes</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>

            <div className='button-row'>

              <button className='button-large-1'>
                <p className='button-large-p'>Large Button</p>
              </button>

              <button className='button-large-2'>
                <p className='button-large-p'>Large Button</p>
              </button>
            </div><br />

            <div className='button-row'>

              <button className='button-large-3'>
                <p className='button-large-p-medium'>Default Button</p>
              </button>

              <button className='button-large-4'>
                <p className='button-large-p-medium'>Default Button</p>
              </button>
            </div><br />

            <div className='button-row'>

              <button className='button-large-5'>
                <p className='button-large-p-small'>Small Button</p>
              </button>

              <button className='button-large-6'>
                <p className='button-large-p-small'>Small Button</p>
              </button>
            </div>
          </div>
        </div>
        
        <div className='box-row-1-column-1'>
          
          <h3>Outline Buttons</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              {outlineButton.map(button => (
                <button key={button.id} className={`button-outline-${button.id}`}>
                  <p>{button.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='box-row-2'>
        <div className='box-row-1-column-1'>

          <h3>Button States</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>

            <div className='button-row'>
              {statesButton.map(blue => (
                <button key={blue.id} className={`button-state-blue-${blue.id}`}>
                  <p className='button-large-medium'>{blue.title}</p>
                </button>
              ))}
            </div><br />
            <div className='button-row'>
              {statesButton.map(green => (
                <button key={green.id} className={`button-state-green-${green.id}`}>
                  <p className='button-large-medium'>{green.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className='box-row-1-column-1'>
          
          <h3>Button with Icons</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className="button-row">
              {buttonIcons.map((button) => (
                <button
                  key={button.id}
                  className={`button-icon-${button.id}`}
                >
                  {button.iconPosition === 'left' && (
                    <span className="button-icon">
                      {icons[button.icon]}
                    </span>
                  )}

                  <span>{button.title}</span>

                  {button.iconPosition === 'right' && (
                    <span className="button-icon">
                      {icons[button.icon]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className='box-row-4'>
        <h3>Button Groups</h3>
        <hr style={{borderTop: "1px solid #d0cccc"}}/>
        
        <div className='button-margin'>
          <div className='button-left-middle-right'>
            {buttonGroupRaw.map(button => (
              <div>
                <button key={button.id} className={`button-group-row-${button.id}`}>
                  <p>{button.title}</p>
                </button>
              </div>
            ))}
          </div><br />

          <div className='button-left-middle-right'>
            {buttonGroupRaw.map(button => (
              <div>
                <button key={button.id} className={`button-group-outline-${button.id}`}>
                  <p>{button.title}</p>
                </button>
              </div>
            ))}
          </div><br />

          <div className='button-top-middle-bottom'>
            {buttonGroupColumn.map(button => (
              <div>
                <button key={button.id} className={`button-group-column-${button.id}`}>
                  <p>{button.title}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='box-row-4'>
        <h3>Social Media Buttons</h3>
        <hr style={{borderTop: "1px solid #d0cccc"}}/>
        
        <div className='button-margin'>
          <div className="button-row">
            {buttonSocialMedia.map((button) => (
              <button
                key={button.id}
                className={`button-icon-social-${button.id}`}
              >
                {button.iconPosition === 'left' && (
                  <span className="button-icon-social">
                    {icon2[button.icon]}
                  </span>
                )}

                <span>{button.title}</span>

                {/* {button.iconPosition === 'right' && (
                  <span className="button-icon">
                    {icon2[button.icon]}
                  </span>
                )} */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
