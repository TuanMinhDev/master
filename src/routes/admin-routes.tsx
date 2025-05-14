import { CuocHen } from "@/pages/master/CuocHen";
import { Customer } from "@/pages/master/Customer";
import { CustomerTypePage } from "@/pages/master/CustomerType/CustomerTypePage";
import { DanhSachCuocHenPage } from "@/pages/master/DanhSachCuocHen/DanhSachCuocHenPage";
import TaoMoiCuocHenPage from "@/pages/master/DanhSachCuocHen/TaoMoiCuocHen/TaoMoiCuocHen";
import TinhTrangKhoangHenPage from "@/pages/master/DanhSachCuocHen/TinhTrangKhoangHen/TinhTrangKhoangHen";
import MasOne from "@/pages/master/MasOne";
import MasThree from "@/pages/master/MasThree";
import MasTwo from "@/pages/master/MasTwo";
import { Ser_CavityPage } from "@/pages/master/SerCavity/list/Ser_Cavity";
import { Ser_CustomerCar_CreateNew } from "@/pages/master/SerCustomer/create-new/create-new";
import { Ser_CustomerCar } from "@/pages/master/SerCustomer/list/Ser_CustomerCar";
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
    key: "MasOne",
    path: "admin/MasOne",
    subMenuTitle: "MasOne",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <MasOne />,
    view: "DL",
  },
  // {
  //   key: "MasTwo",
  //   path: "admin/MasTwo",
  //   mainMenuKey: "admin",
  //   permissionCode: "",
  //   getPageElement: () => <MasTwo />,
  //   view: "DL",
  // },
  // {
  //   key: "MasThree",
  //   path: "admin/MasThree",
  //   subMenuTitle: "MasThree",
  //   mainMenuKey: "admin",
  //   permissionCode: "",
  //   getPageElement: () => <MasThree />,
  //   view: "DL",
  // },
  {
    key: "Ser_CustomerCar", //  Danh sách khách hàng
    path: "admin/Ser_CustomerCar",
    subMenuTitle: "Danh sách khách hàng",
    mainMenuKey: "admin",
    permissionCode: "MNU_QT_DL_DANHSACHKHACHHANG",
    getPageElement: () => <Ser_CustomerCar />,
    view: "DL",
  },
  {
    key: "Ser_CustomerCar", // Danh sách khách hàng
    path: "admin/Ser_CustomerCar/manageSer_CustomerCar/:type?/:CusID?",
    subMenuTitle: "",
    mainMenuKey: "admin",
    permissionCode: "MNU_QT_DL_DANHSACHKHACHHANG",
    getPageElement: () => <Ser_CustomerCar_CreateNew />,
  },
  {
    key: "DanhSachCuocHenDL", //Quản lý cuộc hẹn DL
    path: "admin/DanhSachCuocHenDL",
    subMenuTitle: "Danh sách cuộc hẹn",
    mainMenuKey: "admin",
    permissionCode: "", //
    getPageElement: () => <DanhSachCuocHenPage />,
    view: "DL",
  },

  {
    key: "DanhSachCuocHen", // Tạo mới cuộc hẹn DL
    path: "admin/ThongTinCuocHenDL/:Type/:AppId?/:From?/:FromId?",
    subMenuTitle: "",
    subMenuKey: "DanhSachCuocHen",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <TaoMoiCuocHenPage />,
    view: "DL",
  },
  {
    key: "TinhTrangKhoangHen", // Tạo mới cuộc hẹn
    path: "admin/TinhTrangKhoangHen",
    subMenuTitle: "",
    subMenuKey: "TinhTrangKhoangHen",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <TinhTrangKhoangHenPage />,
    view: "DL",
  },
  {
    key: "CuocHen",
    path: "admin/CuocHen",
    subMenuTitle: "CuocHen",
    subMenuKey: "CuocHen",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <CuocHen/>,
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
    key: "MasTwo",
    path: "admin/MasTwo",
    subMenuTitle: "MasTwo",
    mainMenuKey: "admin",
    permissionCode: "",
    getPageElement: () => <MasTwo />,
    view: "DL",
  },
  
];
