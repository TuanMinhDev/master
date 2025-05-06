import BreadcrumbDetail from "@/packages/ui/header/breadcrumb_detail/BreadcrumbDetail";
import { forwardRef } from "react";

interface IProps {
  handleNavigateHome: () => void;
  handleTraNo: () => void;
  handleHuy: () => void;
}

export const BreadcrumbQLDanhSachNoNCC = forwardRef(
  ({ handleNavigateHome, handleTraNo, handleHuy }: IProps, ref) => {
    const visible = {
      trano: true,
      huy: true,
    };
    return (
      <BreadcrumbDetail
        mainTitle="Danh sách nợ nhà cung cấp"
        detailTitle="Chi tiết công nợ nhà cung cấp"
        handleNavigateHome={handleNavigateHome}
        listButton={[
          {
            text: "Trả nợ",
            onClick: handleTraNo,
            visible: visible["trano"],
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
