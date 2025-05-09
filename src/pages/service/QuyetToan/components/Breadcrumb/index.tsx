import BreadcrumbDetail from "@/packages/ui/header/breadcrumb_detail/BreadcrumbDetail";
import React, { forwardRef } from "react";

interface IProps {
  handleNavigateHome: () => void;
  handleLuu: () => void;
  handleXoa: () => void;
  handleIn: () => void;
  handleKhongSuDung: () => void;
  handleChoPhuTung: () => void;
  handleHuyBo: () => void;
  handleThongTinKhachHang: () => void;
}

export const BreadcrumbBaoGiaChiTiet = forwardRef(
  (
    {
      handleNavigateHome,
      handleLuu,
      handleXoa,
      handleIn,
      handleKhongSuDung,
      handleChoPhuTung,
      handleHuyBo,
      handleThongTinKhachHang,
    }: IProps,
    ref
  ) => {
    const visible = {
      luu: true,
      xoa: true,
      in: true,
      khongSuDung: true,
      choPhuTung: true,
      huyBo: true,
      thongTinKhachHang: true,
    };

    return (
      <BreadcrumbDetail
        mainTitle="Quyết toán"
        detailTitle="Chi tiết"
        handleNavigateHome={handleNavigateHome}
        listButton={[
          {
            text: "Thông tin khách hàng",
            onClick: handleThongTinKhachHang,
            visible: visible["thongTinKhachHang"],
          },
          {
            text: "Lưu",
            onClick: handleLuu,
            visible: visible["luu"],
          },
          {
            text: "Xóa báo giá",
            onClick: handleXoa,
            visible: visible["xoa"],
          },
          {
            text: "In báo giá",
            onClick: handleIn,
            visible: visible["in"],
          },
          {
            text: "Không sử dụng",
            onClick: handleKhongSuDung,
            visible: visible["khongSuDung"],
          },
          {
            text: "Chờ phụ tùng",
            onClick: handleChoPhuTung,
            visible: visible["choPhuTung"],
          },
          {
            text: "Hủy bỏ",
            onClick: handleHuyBo,
            visible: visible["huyBo"],
          },
        ]}
      />
    );
  }
);
