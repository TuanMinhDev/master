
import DanhSachHangBaoHiemNo from "@/pages/service/DanhSachHangBaoHiemNo";
import Detail_DanhSachHangBaoHiemNo from "@/pages/service/DanhSachHangBaoHiemNo/chi-tiet/chi-tiet";
import { QLDanhSachNoNCC } from "@/pages/service/QLDanhSachNoNCC";
import { QLDanhSachNoNCC_Detail } from "@/pages/service/QLDanhSachNoNCC/chi-tiet";
import QuyetToanChiTiet from "@/pages/service/QuyetToan/QuyetToanChiTiet";
import { RouteItem } from "@/types";

export const serviceRoutes: RouteItem[] = [
  {
    key: "service",
    path: "service",
    mainMenuTitle: "service",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => <></>,
  },
  {
    key: "QLDanhSachNoNCC",
    path: "service/QLDanhSachNoNCC",
    subMenuTitle: "QLDanhSachNoNCC",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => <QLDanhSachNoNCC></QLDanhSachNoNCC>,
    view: "DL",
  },
  {
    key: "QLDanhSachNoNCC_Detail",
    path: "service/QLDanhSachNoNCC/WH/:id",
    subMenuTitle: "",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => <QLDanhSachNoNCC_Detail></QLDanhSachNoNCC_Detail>,
    view: "DL",
  },
  {
    key: "DanhSachHangBaoHiemNo",
    path: "service/DanhSachHangBaoHiemNo",
    subMenuTitle: "DanhSachHangBaoHiemNo",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => <DanhSachHangBaoHiemNo></DanhSachHangBaoHiemNo>,
    view: "DL",
  },
  {
    key: "Detail_DanhSachHangBaoHiemNo",
    path: "service/DanhSachHangBaoHiemNo/WH/:id",
    subMenuTitle: "",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => (
      <Detail_DanhSachHangBaoHiemNo></Detail_DanhSachHangBaoHiemNo>
    ),
    view: "DL",
  },

  {
    key: "QuyetToanChiTiet",
    path: "service/QuyetToanChiTiet",
    subMenuTitle: "QuyetToanChiTiet",
    mainMenuKey: "service",
    permissionCode: "",
    getPageElement: () => <QuyetToanChiTiet></QuyetToanChiTiet>,
    view: "DL",
  },
];
