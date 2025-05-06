import BreadcrumbDetail from "@/packages/ui/header/breadcrumb_detail/BreadcrumbDetail";
import { forwardRef } from "react";

interface IProps {
  handleNavigateHome: () => void;
  handleThuTien: () => void;
  handleHuy: () => void;
}

export const BreadcrumbDanhSachHangBaoHiemNo = forwardRef(
  ({ handleNavigateHome, handleThuTien, handleHuy }: IProps, ref) => {
    const visible = {
      thutien: true,
      huy: true,
    };
    return (
      <BreadcrumbDetail
        mainTitle="Danh sách nợ nhà cung cấp"
        detailTitle="Chi tiết công nợ nhà cung cấp"
        handleNavigateHome={handleNavigateHome}
        listButton={[
          {
            text: "Thu tiền",
            onClick: handleThuTien,
            visible: visible["thutien"],
          },
          {
            text: "Hủy",
            onClick: handleHuy,
            visible: visible["huy"],
          }
        ]}
      />
    );
  }
);
