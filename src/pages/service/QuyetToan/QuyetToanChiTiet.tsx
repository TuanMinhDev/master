import { ScrollView } from "devextreme-react";
import { BreadcrumbBaoGiaChiTiet } from "./components/Breadcrumb";
import { PhuTungPage } from "./components/PhuTung";
import { PhanCongLaoDongPage } from "./components/PhanCongLaoDong";
import ThongTinKhachHang from "./components/ThongTinKhachHang";
import ThongTinThanhToan from "./components/ThongTinThanhToan/ThongTinThanhToan";
import { useRef, useState } from "react";

import { useVisibilityControl } from "@/packages/hooks";
import ThongTinKhachHangVaXeModal from "./ThongTinKhachHangVaXeModal";

const QuyetToanChiTiet = () => {
  const thongTinKHRef = useRef<any>(null);
  const modalControl = useVisibilityControl({ defaultVisible: false });

  const [paymentData, setPaymentData] = useState({
    payAllRepairCost: false,
    otherDiscount: 0,
    cardPayment: 0,
    totalBeforeTax: 0,
    totalAfterTax: 50500000,
    discount: 0,
    finalTotal: 10000000,
  });

  const handlePaymentChange = (field: string, value: any) => {
    setPaymentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView>
      <BreadcrumbBaoGiaChiTiet 
        handleNavigateHome={() => {}} 
        handleModal={() => modalControl.open()} 
      />

      <div>
        <ThongTinKhachHang ref={thongTinKHRef} />
        <PhanCongLaoDongPage />
        <PhuTungPage />
        <ThongTinThanhToan onValueChanged={handlePaymentChange} />
      </div>
      <ThongTinKhachHangVaXeModal 
        control={modalControl} 
        ref={thongTinKHRef}
        onSave={(data) => console.log('Saved data:', data)}
      />
    </ScrollView>
  );
};

export default QuyetToanChiTiet;
