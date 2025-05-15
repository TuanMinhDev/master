import BreadcrumbDetail from "@/packages/ui/header/breadcrumb_detail/BreadcrumbDetail";
import { forwardRef } from "react";

interface IProps {
  handleNavigateHome?: () => void;
  handleModal?: () => void;
}

export const BreadcrumbBaoGiaChiTiet = forwardRef(
  ({ handleNavigateHome, handleModal }: IProps, ref) => {
    return (
      <BreadcrumbDetail
        mainTitle="Quyết toán"
        detailTitle="Chi tiết"
        handleNavigateHome={handleNavigateHome}
        listButton={[
          {
            text: "Modal",
            onClick: handleModal ?? (() => {}),
            visible: true,
          },
          {
            text: "In quyết toán",
            onClick: () => {},
            visible: true,
          },
          {
            text: "Công nợ",
            onClick: () => {},
            visible: true,
          },
          {
            text: "In phiếu thu ",
            onClick: () => {},
            visible: true,
          },
          {
            text: "Kết thúc",
            onClick: () => {},
            visible: true,
          },
          {
            text: "In phiếu giao xe",
            onClick: () => {},
            visible: true,
          },
        ]}
      />
    );
  }
);
