// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import Categories from "layouts/categories";
import AddCategories from "layouts/categories/AddNew";
import Editcategories from "layouts/categories/Editcategories";
import MidCategories from "layouts/midcategories";
import Size from "layouts/Size";
import AddSize from "layouts/Size/AddNew";
import Color from "layouts/Color";
import AddColor from "layouts/Color/AddNew";
import City from "layouts/City";
import Addcity from "layouts/City/AddNew";
import ShippingCost from "layouts/ShippingCost";
import AddShippingCost from "layouts/ShippingCost/AddNew";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import MessageIcon from "@mui/icons-material/Message";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WebsiteSlider from "layouts/WebsiteSlider";
import WebsiteSliderAdd from "layouts/WebsiteSlider/AddNew";

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
    name: "Courses",
    key: "Courses",
    icon: <MenuBookIcon />,
    route: "/categories",
    component: <Categories />,
  },
  {
    type: "collapse",
    name: "Department",
    key: "Department",
    icon: <AssuredWorkloadIcon />,
    route: "/midcategories",
    component: <MidCategories />,
  },
  {
    type: "collapse",
    name: "Team",
    key: "Team",
    icon: <Diversity3Icon />,
    route: "/Size",
    component: <Size />,
  },
  {
    type: "collapse",
    name: "News",
    key: "News",
    icon: <NewspaperIcon />,
    route: "/Color",
    component: <Color />,
  },
  {
    type: "collapse",
    name: "Student testimonials",
    key: "Student testimonials",
    icon: <GroupAddIcon />,
    route: "/City",
    component: <City />,
  },
  {
    type: "collapse",
    name: "Department Message",
    key: "Department Message",
    icon: <MessageIcon />,
    route: "/Shipping-Cost",
    component: <ShippingCost />,
  },
  {
    type: "collapse",
    name: "Website Slider",
    key: "Website Slider",
    icon: <BurstModeIcon />,
    route: "/WebsiteSlider",
    component: <WebsiteSlider />,
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
    route: "/new-categories",
    component: <AddCategories />,
  },
  {
    type: "collapse",
    route: "/edit-category/:id",
    component: <Editcategories />,
  },
  {
    type: "collapse",
    route: "/new-size",
    component: <AddSize />,
  },
  {
    type: "collapse",
    route: "/new-color",
    component: <AddColor />,
  },
  {
    type: "collapse",
    route: "/new-city",
    component: <Addcity />,
  },
  {
    type: "collapse",
    route: "/WebsiteSliderAdd",
    component: <WebsiteSliderAdd />,
  },
];

export default routes;
