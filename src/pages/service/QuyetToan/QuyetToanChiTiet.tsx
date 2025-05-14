
import { ScrollView } from "devextreme-react";
import { BreadcrumbBaoGiaChiTiet } from "./components/Breadcrumb";
import { PhuTungPage } from "./components/PhuTung";
import { PhanCongLaoDongPage } from "./components/PhanCongLaoDong";
import ThongTinKhachHang from "./components/ThongTinKhachHang";
import ThongTinThanhToan from "./components/ThongTinThanhToan/ThongTinThanhToan";
import { useEffect, useRef, useState } from "react";
import ThongTinKhachHangModal, { CustomerData } from "./components/ThongTinKhachHangModal/ThongTinKhachHangModal";

const QuyetToanChiTiet = () => {
  const thongTinKHRef = useRef<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  
  const [paymentData, setPaymentData] = useState({
    payAllRepairCost: false,
    otherDiscount: 0,
    cardPayment: 0,
    totalBeforeTax: 0,
    totalAfterTax: 50500000,
    discount: 0,
    finalTotal: 10000000
  });

  const handlePaymentChange = (field: string, value: any) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleShowCustomerInfo = () => {
    console.log("handleShowCustomerInfo được gọi");
    setModalVisible(true);
    
    const currentData = thongTinKHRef.current?.getFormData();
    if (currentData) {
      setCustomerData(currentData);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Mẫu dữ liệu - thay thế bằng dữ liệu thực tế từ API
    const sampleData = {
      // Customer info
      HoVaTen: "CTY TNHH MTV TRƯỜNG...",
      NguoiLienLac: "CTY TNHH MTV TRƯỜNG...",
      DiaChi: "PHƯỜNG UYÊN HƯNG- Thị xã Tân Uyên - Bình Dương",
      DiDong: "",
      MstKh: "",
      YeuCauKH: "",
      TinhTrangNhanXe: "",
      
      // Vehicle info
      BienSo: "61A-56133",
      SoVIN: "RLUDGWZDBJ0027705",
      HieuXe: "HYUNDAI",
      Model: "I10 NEW 1.2L A/T",
      SoMay: "G4LAJM109733",
      MauXe: "ĐỎ",
      Km: "88",
      
      // RO info
      SoRO: "BG-VS058-231204-009"
    };
    
    if (thongTinKHRef.current) {
      thongTinKHRef.current.setFormData(sampleData);
    }
  }, []);

  return (
    <ScrollView>
      <BreadcrumbBaoGiaChiTiet
        handleNavigateHome={() => {}}
        handleLuu={() => {}}
        handleXoa={() => {}}
        handleIn={() => {}}
        handleKhongSuDung={() => {}}
        handleChoPhuTung={() => {}}
        handleHuyBo={() => {}}
        
      />
    
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ml-2"
        onClick={handleShowCustomerInfo}
      >
        Test Mở Modal
      </button>
      <div>
        <ThongTinKhachHang ref={thongTinKHRef} />
        <PhanCongLaoDongPage />
        <PhuTungPage />
        <ThongTinThanhToan onValueChanged={handlePaymentChange} />
      </div>
      <ThongTinKhachHangModal 
        visible={modalVisible}
        onClose={handleCloseModal}
        onHiding={handleCloseModal}
        customerData={customerData}
      />
    </ScrollView>
  );
};

export default QuyetToanChiTiet;
