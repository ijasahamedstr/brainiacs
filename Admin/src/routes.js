// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import WebsiteSlider from "layouts/website slider";
import WebsiteSliderAdd from "layouts/website slider/AddNew";
import News from "layouts/News";
import Editcategories from "layouts/website slider/Editcategories";
import AddNews from "layouts/News/AddNew";
import Team from "layouts/Team";
import AddTeam from "layouts/Team/AddNew";
import Department from "layouts/Department";
import AddDepartment from "layouts/Department/AddNew";
import DepartmentMessage from "layouts/Department Message";
import AddDepartmentMessage from "layouts/Department Message/AddNew";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Website Slider",
    key: "Website Slider",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/WebsiteSlider",
    component: <WebsiteSlider />,
  },
  {
    type: "collapse",
    name: "News",
    key: "News",
    icon: <CategoryIcon />,
    route: "/News",
    component: <News />,
  },
  {
    type: "collapse",
    name: "Team",
    key: "Team",
    icon: <ColorLensIcon />,
    route: "/Team",
    component: <Team />,
  },
  {
    type: "collapse",
    name: "Department",
    key: "Department",
    icon: <LocationCityIcon />,
    route: "/Department",
    component: <Department />,
  },
  {
    type: "collapse",
    name: "Department Message",
    key: "Department Message",
    icon: <MonetizationOnIcon />,
    route: "/Department-Message",
    component: <DepartmentMessage />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    route: "/new-WebsiteSlider",
    component: <WebsiteSliderAdd />,
  },
  {
    type: "collapse",
    route: "/new-News",
    component: <AddNews />,
  },
  {
    type: "collapse",
    route: "/new-Team",
    component: <AddTeam />,
  },
  {
    type: "collapse",
    route: "/edit-category/:id",
    component: <Editcategories />,
  },
  {
    type: "collapse",
    route: "/new-Department",
    component: <AddDepartment />,
  },
  {
    type: "collapse",
    route: "/new-shippingcost",
    component: <AddDepartmentMessage />,
  },
];

export default routes;
