import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Speed";
import ExtensionIcon from "@mui/icons-material/Extension";
import TableViewIcon from "@mui/icons-material/TableView";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import WidgetsIcon from "@mui/icons-material/Widgets";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import DescriptionIcon from "@mui/icons-material/Description";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { getSidebar } from "../mocks/sidebarApi";
import "../styles/sidebar.css";
import type { ISidebarItem } from "../typescript/home";

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const Sidebar = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: IProps) => {
  const [sidebar, setSidebar] = useState<ISidebarItem[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(
    null
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchSidebar = async () => {
      const data = await getSidebar();

      setSidebar(data);
    };

    fetchSidebar();
  }, []);

  const icons = [
    <DashboardIcon key="dashboard" />,
    <ExtensionIcon key="extension" />,
    <TableViewIcon key="table" />,
    <EditNoteIcon key="edit" />,
    <AutoAwesomeMosaicIcon key="mosaic" />,
    <WidgetsIcon key="widgets" />,
    <BarChartIcon key="chart" />,
    <MapIcon key="map" />,
    <DescriptionIcon key="description" />,
  ];


  const isItemActive = (item: ISidebarItem) => {
    if (!item.path) {
      return false;
    }

    return location.pathname === item.path;
  };

  /**
   * Kiểm tra parent có child đang active hay không
   */
  const hasActiveChild = (item: ISidebarItem) => {
    if (!item.children) {
      return false;
    }

    return item.children.some(
      (child) => location.pathname === child.path
    );
  };

  /**
   * Click menu
   */
  const handleMenuClick = (item: ISidebarItem) => {
    // Có submenu
    if (item.children) {
      setOpenMenu(
        openMenu === item.id ? null : item.id
      );

      return;
    }

    // Có route
    if (item.path) {
      navigate(item.path);
    }
  };

  /**
   * Click child
   */
  const handleChildClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      onMouseEnter={() => setIsDrawerOpen(true)}
      onMouseLeave={() => setIsDrawerOpen(false)}
      className={`sidebar ${
        isDrawerOpen
          ? "sidebar-open"
          : "sidebar-closed"
      }`}
    >
      <nav className="sidebar-menu">

        {sidebar.map((item, index) => {
          const isOpen = openMenu === item.id;

          const isActive = isItemActive(item);

          const childIsActive =
            hasActiveChild(item);

          return (
            <div
              key={item.id}
              className="sidebar-group"
            >

              {/* =========================
                  PARENT ITEM
              ========================= */}

              <button
                type="button"
                className={`sidebar-item ${
                  isActive || childIsActive
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleMenuClick(item)
                }
              >

                <span className="sidebar-icon">
                  {icons[index]}
                </span>

                <span className="sidebar-text">
                  {item.title}
                </span>

                {item.children && (
                  <ChevronRightIcon
                    className={`sidebar-arrow ${
                      isOpen ? "open" : ""
                    }`}
                  />
                )}

              </button>

              {/* =========================
                  CHILDREN
              ========================= */}

              {isOpen && item.children && (
                <div className="sidebar-children">

                  {item.children.map((child) => {

                    const isActive =
                      location.pathname ===
                      child.path;

                    return (
                        <button
                          type="button"
                          key={child.id}
                          className={`sidebar-child ${
                            isActive
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleChildClick(
                              child.path
                            )
                          }
                        >
                          <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                            <CircleOutlinedIcon sx={{color: '#d4d1d1', width: '13px', height: '13px'}}/>
                            {child.title}
                          </div>
                        </button>
                    );
                  })}

                </div>
              )}

            </div>
          );
        })}

      </nav>
    </aside>
  );
};

export default Sidebar;