import { RouterOutlet, Routes } from '@angular/router';
import { DashboardPage } from '../app/page/dashboard-page/dashboard-page';
import { ButtonPage } from '../app/page/componentPage/button-page/button-page';
import { BadgePage } from '../app/page/componentPage/badge-page/badge-page';
import { AlertPage } from '../app/page/componentPage/alert-page/alert-page';
import { TabPage } from '../app/page/componentPage/tab-page/tab-page';
import { CardPage } from '../app/page/componentPage/card-page/card-page';
import { ProgressBarPage } from '../app/page/componentPage/progress-bar-page/progress-bar-page';
import { ModalPage } from '../app/page/componentPage/modal-page/modal-page';
import { SwitchPage } from '../app/page/componentPage/switch-page/switch-page';
import { GridPage } from '../app/page/componentPage/grid-page/grid-page';
import { TypographyPage } from '../app/page/componentPage/typography-page/typography-page';
import { SweetAlert2Page } from '../app/page/componentPage/sweet-alert2-page/sweet-alert2-page';
import { BasicTablePage } from '../app/page/tablePage/basic-table-page/basic-table-page';
import { DataTablePage } from '../app/page/tablePage/data-table-page/data-table-page';
import { BasicFormPage } from './page/formPage/basic-form-page/basic-form-page';
import { AdvancedFormPage } from './page/formPage/advanced-form-page/advanced-form-page';
import { FontAwesomePage } from './page/iconPage/font-awesome-page/font-awesome-page';
import { ModernIconPage } from './page/iconPage/modern-icon-page/modern-icon-page';
import { WidgetPage } from './page/widget-page/widget-page';
import { ChartJsPage } from './page/chartPage/chart-js-page/chart-js-page';
import { GoogleMapPage } from './page/mapPage/google-map-page/google-map-page';
import { VectorMapPage } from './page/mapPage/vector-map-page/vector-map-page';
import { App } from './app';
import { LoginPage } from './page/authPage/login-page/login-page';
import { RegisterPage } from './page/authPage/register-page/register-page';
import { ForgetPasswordPage } from './page/authPage/forget-password-page/forget-password-page';
import { MainLayout } from './main-layout/main-layout';

export const routes: 
    Routes = [
        {
            path: "",
            component: MainLayout,
            children: [
                {
                    path: "",
                    component: DashboardPage
                },
        
                {
                    path: "components",
                    children: [
                        {
                            path: "buttons",
                            component: ButtonPage
                        },
                        {
                            path: "badges",
                            component: BadgePage
                        },
                        {
                            path: "tabs",
                            component: TabPage
                        },
                        {
                            path: "cards",
                            component: CardPage
                        },
                        {
                            path: "alerts",
                            component: AlertPage
                        },
                        {
                            path: "progress-bar",
                            component: ProgressBarPage
                        },
                        {
                            path: "modals",
                            component: ModalPage
                        },
                        {
                            path: "switches",
                            component: SwitchPage
                        },
                        {
                            path: "grids",
                            component: GridPage
                        },
                        {
                            path: "typography",
                            component: TypographyPage
                        },
                        {
                            path: "sweet-alert-2",
                            component: SweetAlert2Page
                        },
                    ]
                },
                {
                    path: "tables",
                    children: [
                        {
                            path: "basic-table",
                            component: BasicTablePage
                        },
                        {
                            path: "data-table",
                            component: DataTablePage
                        }
                    ]
                },
                
                {
                    path: "forms",
                    children: [
                        {
                            path: "basic-form",
                            component: BasicFormPage
                        },
                        {
                            path: "advanced-form",
                            component: AdvancedFormPage
                        }
                    ]
                },
        
                {
                    path: "icons",
                    children: [
                        {
                            path: "font-awesome",
                            component: FontAwesomePage
                        },
                        {
                            path: "modern-icons",
                            component: ModernIconPage
                        }
                    ]
                },
        
                {
                    path: "widgets",
                    component: WidgetPage
                },
        
                {
                    path: "charts",
                    children: [
                        {
                            path: "font-awesome",
                            component: ChartJsPage
                        },
                    ]
                },
        
                {
                    path: "maps",
                    children: [
                        {
                            path: "google-maps",
                            component: GoogleMapPage
                        },
                        {
                            path: "vector-maps",
                            component: VectorMapPage
                        }
                    ]
                },

            ]
        },

        {
            
            path: "auth",
            children: [
                {
                    path: "login",
                    component: LoginPage
                },
                {
                    path: "register",
                    component: RegisterPage
                },
                {
                    path: "forget-password",
                    component: ForgetPasswordPage
                }
            ]
        }


];
