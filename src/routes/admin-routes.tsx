import { Customer } from "@/pages/master/Customer";
import { CustomerTypePage } from "@/pages/master/CustomerType/CustomerTypePage";
import MasOne from "@/pages/master/MasOne";
import MasThree from "@/pages/master/MasThree";
import MasTwo from "@/pages/master/MasTwo";

import { Ser_CavityPage } from "@/pages/master/SerCavity/list/Ser_Cavity";
import { RouteItem } from "@/types";

export const adminRoutes: RouteItem[] = [
  {
    key: "admin",
    path: "admin",
    mainMenuTitle: "admin",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <></>,
  },
  {
    key: "CustomerType",
    path: "admin/CustomerType",
    subMenuTitle: "CustomerType",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <CustomerTypePage />,
    view: "DL",
  },
  {
    key: "SerCavity",
    path: "admin/SerCavity",
    subMenuTitle: "SerCavity",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <Ser_CavityPage />,
    view: "DL",
  },
  {
    key: "Customer",
    path: "admin/Customer",
    subMenuTitle: "Customer",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <Customer />,
    view: "DL",
  },
  {
    key: "MasOne",
    path: "admin/MasOne",
    subMenuTitle: "MasOne",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <MasOne />,
    view: "DL",
  },
  {
    key: "MasTwo",
    path: "admin/MasTwo",
    subMenuTitle: "MasTwo",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <MasTwo />,
    view: "DL",
  },
  {
    key:"MasThree",
    path: "admin/MasThree",
    subMenuTitle: "MasThree",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <MasThree />,
    view: "DL",
  }
];
