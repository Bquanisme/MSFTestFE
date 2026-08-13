import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import AdminLogo from '../assets/adminLogo.jpg'

import Sidebar from "./Sidebar";
import "../styles/header.css";
import tab from '../assets/tabs.png'
import { EmailBadge, NotificationsBadge } from "./badge/Badge";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  return (
    <>
      <header className="header">
        <div className="logo-and-hamburger">
          <div className="logo">
            <img
              src={tab}
              alt="logo-header"
              className="logo-header"
            />

            <a href="#" className="logo-title">
              ElaAdmin
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setIsDrawerOpen((prev) => !prev)}
          >
            <MenuIcon />
          </button>
        </div>
        <div className="icon-header">
            <SearchIcon sx={{color: "#969494", cursor: 'pointer'}}/>
            <NotificationsBadge/>
            <EmailBadge/>
            <div>
                <img src={AdminLogo} alt="admin-logo" className="img-admin-logo"/>
            </div>
        </div>
      </header>

      <Sidebar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
    </>
  );
}

export default Header;