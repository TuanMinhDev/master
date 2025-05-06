import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import BreadcrumbDetail from "@/packages/ui/header/breadcrumb_detail/BreadcrumbDetail";
import { useParams, useNavigate } from "react-router-dom";

export const Detail_Ser_CustomerCar = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/7206207001/admin/Ser_CustomerCar");
  };

  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbDetail
          mainTitle="Quản lý khách hàng"
          detailTitle="Sửa thông tin khách hàng"
          handleNavigateHome={handleNavigateHome}
        />
      </AdminContentLayout.Slot>
      <AdminContentLayout.Slot name={"Content"}>Content</AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
