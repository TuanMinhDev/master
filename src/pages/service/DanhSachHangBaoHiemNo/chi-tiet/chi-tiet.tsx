import { useNetworkNavigate } from "@/packages/hooks";
import { BreadcrumbQLDanhSachNoNCC } from "../../QLDanhSachNoNCC/chi-tiet/components/BreadcrumbQLDanhSachNoNCC/BreadcrumbQLDanhSachNoNCC";
import { useEffect, useRef } from "react";
import { Form } from "./Form";
import { useParams } from "react-router-dom";
import { useClientgateApi } from "@/packages/api";
import { BreadcrumbDanhSachHangBaoHiemNo } from "./BreadcrumbDanhSachHangBaoHiemNo";
import { ScrollView } from "devextreme-react";

const Detail_DanhSachHangBaoHiemNo = () => {
  const breadcrumbRef = useRef();
  const navigate = useNetworkNavigate();
  const { id } = useParams<{ id: string }>();
  const api = useClientgateApi();

  const FormDS = useRef<{ setFormData: (data: any) => void }>(null);
  const handleNavigateHome = () => {
    const link = "/service/DanhSachHangBaoHiemNo";
    navigate(link, {
      replace: true,
    });
  };
  const handleThuTien = () => {
    console.log("Xử lý trả nợ cho nhà cung cấp ID:");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching insurance data for ID:", id);
        const response = await api.DanhSachHangBaoHiemNo_GetByCusID(id, false);
        console.log("API response:", response);
        if (response.isSuccess && response.Data) {
          FormDS?.current?.setFormData(response.Data);
        } else {
          console.error("API call successful but no data returned:", response);
        }
      } catch (error) {
        console.error("Error fetching insurance data:", error);
      }
    };

    if (id) {
      fetchData();
    } else {
      console.error("No insurance ID provided");
    }
  }, [id, api]);

  return (
    <div>
      <BreadcrumbDanhSachHangBaoHiemNo
        handleNavigateHome={handleNavigateHome}
        handleThuTien={handleThuTien}
        handleHuy={handleNavigateHome}
        ref={breadcrumbRef}
      />
      <ScrollView>
        <div className="flex flex-col">
          <Form ref={FormDS} />
        </div>
      </ScrollView>
    </div>
  );
};
export default Detail_DanhSachHangBaoHiemNo;
