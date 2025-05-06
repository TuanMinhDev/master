import { useEffect, useRef } from "react";
import { FormQLDSNNCC } from "./components/form/FormQLDSNNCC";
import { useNetworkNavigate } from "@/packages/hooks";
import { ScrollView } from "devextreme-react";
import { BreadcrumbQLDanhSachNoNCC } from "./components/BreadcrumbQLDanhSachNoNCC/BreadcrumbQLDanhSachNoNCC";
import { useParams } from "react-router-dom";
import { useClientgateApi } from "@/packages/api";

export const QLDanhSachNoNCC_Detail = () => {
  const breadcrumbRef = useRef();
  const navigate = useNetworkNavigate();
  const { id } = useParams<{ id: string }>();
  const api = useClientgateApi();

  const FormQL = useRef<{ setFormData: (data: any) => void }>(null);

  const handleNavigateHome = () => {
    const link = "/service/QLDanhSachNoNCC";
    navigate(link, {
      replace: true,
    });
  };

  const handleTraNo = () => {
    // Xử lý logic trả nợ ở đây
    console.log("Xử lý trả nợ cho nhà cung cấp ID:", id);
  };

  const handleHuy = () => {
    const link = "/service/QLDanhSachNoNCC";
    navigate(link, {
      replace: true,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.QLDanhSachNoNCC_GetBySupplierId(id, false);
       
        FormQL?.current?.setFormData(response.Data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu nhà cung cấp:", error);
      }
    };

    if (id) {
      fetchData();
    } else {
      console.error("Không có ID nhà cung cấp");
    }
  }, [id, api]);

  return (
    <ScrollView style={{ scrollBehavior: "smooth" }} useNative>
      <BreadcrumbQLDanhSachNoNCC
        handleNavigateHome={handleNavigateHome}
        handleTraNo={handleTraNo}
        handleHuy={handleHuy}
        ref={breadcrumbRef}
      />
      <div className="flex flex-col">
        <FormQLDSNNCC ref={FormQL} />
      </div>
    </ScrollView>
  );
};
