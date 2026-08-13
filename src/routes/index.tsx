import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layouts";
import DashboardPage from "../pages/dashboard";
import WidgetsPage from "../pages/widgets";
import ButtonPage from "../pages/components/button";
import BadgetsPage from "../pages/components/badgets";
import TabsPage from "../pages/components/tabs";
import CardsPage from "../pages/components/cards";
import AlertsPage from "../pages/components/alerts";
import ProgressBarsPage from "../pages/components/progressBars";
import ModalsPage from "../pages/components/modals";
import SwitchesPage from "../pages/components/switches";
import GridsPage from "../pages/components/grids";
import TypographyPage from "../pages/components/typography";
import SweetAlert2Page from "../pages/components/sweetAlert2";
import BasicTablePage from "../pages/tables/basicTable";
import DataTablePage from "../pages/tables/dataTable";
import BasicFormPage from "../pages/forms/basicForm";
import AdvancedFormPage from "../pages/forms/advancedForm";
import FontAwesomePage from "../pages/icons/fontAwesome";
import ModernIconsPage from "../pages/icons/modernIcons";
import ChartJsPage from "../pages/charts/chartJs";
import GoogleMapsPage from "../pages/maps/googleMaps";
import VectorMapsPage from "../pages/maps/vectorMaps";
import LoginPage from "../pages/pages/login";
import RegisterPage from "../pages/pages/register";
import ForgetPasswordPage from "../pages/pages/forgetPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <DashboardPage />,
            },
            {
                path: 'components',
                element: <Outlet/>,
                children: [
                    {
                        path: 'buttons',
                        element: <ButtonPage/>
                    },
                    {
                        path: 'badges',
                        element: <BadgetsPage/>
                    },
                    {
                        path: 'tabs',
                        element: <TabsPage/>
                    },
                    {
                        path: 'cards',
                        element: <CardsPage/>
                    },
                    {
                        path: 'alerts',
                        element: <AlertsPage/>
                    },
                    {
                        path: 'progress-bar',
                        element: <ProgressBarsPage/>
                    },
                    {
                        path: 'modals',
                        element: <ModalsPage/>
                    },
                    {
                        path: 'switches',
                        element: <SwitchesPage/>
                    },
                    {
                        path: 'grids',
                        element: <GridsPage/>
                    },
                    {
                        path: 'typography',
                        element: <TypographyPage/>
                    },
                    {
                        path: 'sweet-alert-2',
                        element: <SweetAlert2Page/>
                    },
                ]
            },
            {
                path: 'tables',
                element: <Outlet/>,
                children: [
                    {
                        path: 'basic-table',
                        element: <BasicTablePage/>
                    },
                    {
                        path: 'data-table',
                        element: <DataTablePage/>
                    },
                ]
            },
            {
                path: 'forms',
                element: <Outlet/>,
                children: [
                    {
                        path: 'basic-form',
                        element: <BasicFormPage/>
                    },
                    {
                        path: 'advanced-form',
                        element: <AdvancedFormPage/>
                    },
                ]
            },
            {
                path: 'icons',
                element: <Outlet/>,
                children: [
                    {
                        path: 'font-awesome',
                        element: <FontAwesomePage/>
                    },
                    {
                        path: 'modern-icons',
                        element: <ModernIconsPage/>
                    },
                ]
            },
            {
                path: "widgets",
                element: <WidgetsPage />,
            },
            {
                path: 'charts',
                element: <Outlet/>,
                children: [
                    {
                        path: 'chart-js',
                        element: <ChartJsPage/>
                    },
                ]
            },
            {
                path: 'maps',
                element: <Outlet/>,
                children: [
                    {
                        path: 'google-maps',
                        element: <GoogleMapsPage/>
                    },
                    {
                        path: 'vector-maps',
                        element: <VectorMapsPage/>
                    },
                ]
            },
        ],
    },
    {
        path: "/pages",
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
            {
                path: 'forget-password',
                element: <ForgetPasswordPage/>
            },
        ]
    }
]);
