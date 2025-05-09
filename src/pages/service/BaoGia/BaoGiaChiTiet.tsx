import { ScrollView } from "devextreme-react";
import { BreadcrumbBaoGiaChiTiet } from "./components/Breadcrumb";
import ThongTinKhachHang from "./components/ThongTinKhachHang";

const BaoGiaChiTiet = () => {
  return <ScrollView>
    <BreadcrumbBaoGiaChiTiet
      handleNavigateHome={() => { }}
      handleLuu={() => { }}
      handleXoa={() => { }}
      handleIn={() => { }}
      handleKhongSuDung={() => { }}
      handleChoPhuTung={() => { }}
      handleHuyBo={() => { }}
    />
    <div>
      <ThongTinKhachHang/>
      {/* <PhanCongLaoDong/>
      <PhanCongLaoDong/> */}
      
    </div>

  </ScrollView>;
};

export default BaoGiaChiTiet;
