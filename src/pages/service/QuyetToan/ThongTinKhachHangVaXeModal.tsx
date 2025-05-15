import { useI18n } from "@/i18n/useI18n";
import { VisibilityControl } from "@packages/hooks";
import { useForm, Controller } from "react-hook-form";
import Popup from "devextreme-react/popup";
import TabPanel from "devextreme-react/tab-panel";
import Button from "devextreme-react/button";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { SelectBoxField } from "@/packages/ui/hook-form-field/SelectBoxField";
import { DateBoxField } from "@/packages/ui/hook-form-field/DateBoxField";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { forwardRef, useImperativeHandle, useState } from "react";
import CheckBox from "devextreme-react/check-box";
import { CheckBoxField } from "@/packages/ui/hook-form-field/CheckBoxField";
import ButtonCommon from "@/packages/ui/button/ButtonCommon";

interface ThongTinKhachHangVaXeModalProps {
  control: VisibilityControl;
  onSave?: (data: any) => void;
}

const ThongTinKhachHangVaXeModal = forwardRef(
  ({ control, onSave }: ThongTinKhachHangVaXeModalProps, ref) => {
    const { t } = useI18n("Common");
    const [currentTab, setCurrentTab] = useState(0);
    const [khongCoBienSo, setKhongCoBienSo] = useState(false);

    const {
      control: formControl,
      handleSubmit,
      setValue,
      reset,
    } = useForm({
      defaultValues: {
        LoaiKH: "Cá nhân",
        HoTen: "",
        CMND: "",
        NgaySinh: "",
        DiDong: "",
        DienThoai: "",
        Fax: "",
        MST: "",
        Website: "",
        Email: "",
        DiaChi: "",
        QuanHuyen: "",
        TinhTP: "",
        GioiTinh: "",
        // Contact info
        NguoiLienLacHoTen: "",
        NguoiLienLacDiaChi: "",
        NguoiLienLacDiDong: "",
        NguoiLienLacGioiTinh: "Nam",
        NguoiLienLacEmail: "",

        // Vehicle info
        BienSo: "",
        HangXe: "HYUNDAI",
        SoKhung: "",
        SoKm: 0,
        NgayRutHanBH: null,
        SoKM_GDBH: 0,
        MauHieuXe: "",
        SoMay: "",
        Model: "VELOSTER 1.6 A/T (2011)",
        Mau: "",
        NamSanXuat: "",
        MaAVN: "",
        SoSeriAcQuy: "",
        NgayMuaXe: null,
        NgayDKBH: null,
        NgayXNBH: null,

        // Insurance info
        HangBaoHiem: "",
        SoHopDong: "",
        NgayBatDau: null,
        NgayKetThuc: null,
      },
    });

    const onTabChange = (e: any) => {
      setCurrentTab(e);
    };

    const handleClose = () => {
      control.close();
    };

    const handleSave = (data: any) => {
      if (onSave) {
        onSave(data);
      }
      control.close();
    };

    useImperativeHandle(ref, () => ({
      setFormData: (data: any) => {
        reset(data);
      },
    }));

    return (
      <Popup
        visible={control.visible}
        title={t("Thông tin khách hàng và xe")}
        showCloseButton
        onHiding={handleClose}
        width="90%"
        height="95%"
        position="center"
      >
        <form id="customerVehicleForm" onSubmit={handleSubmit(handleSave)}>
          <div>
            <TabPanel
              width="100%"
              animationEnabled={true}
              swipeEnabled={true}
              dataSource={[
                { title: "Khách hàng và xe", id: 0 },
                { title: "Lịch sử sửa chữa", id: 1 },
              ]}
              className="my-[2px] custom-tab-panel"
              onSelectedIndexChange={onTabChange}
              selectedIndex={currentTab}
            />
          </div>

          <div
            className="flex flex-col h-full mt-[5px] p-[5px]"
            style={{ display: currentTab === 0 ? "flex" : "none" }}
          >
            <CollapseHeader
              showCollapse={false}
              title="Thông tin khách hàng"
              headerRender={
                <div className="flex items-center gap-[8px]">
                  <CheckBoxField
                    field={""}
                    label="Khách hàng cũng là người liên lạc"
                  />
                </div>
              }
              render={
                <div className="grid grid-cols-3 gap-4 pl-4 pr-4">
                  <div className="flex flex-col">
                    <div className="flex items-center ">
                      <Controller
                        name="LoaiKH"
                        control={formControl}
                        render={({ field }) => (
                          <SelectBoxField
                            field={field}
                            label="Loại KH"
                            dataSource={["Cá nhân", "Doanh nghiệp"]}
                            displayExpr={(item) => item}
                            labelWidth="100px"
                            width={250}
                          />
                        )}
                      />
                    </div>
                    <Controller
                      name="GioiTinh"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Giới tính"
                          dataSource={["Nam", "Nữ"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                        />
                      )}
                    />
                    <Controller
                      name="NgaySinh"
                      control={formControl}
                      render={({ field }) => (
                        <DateBoxField
                          field={field}
                          label="Ngày mua xe"
                          displayFormat="yyyy-MM-dd"
                          type="date"
                          labelWidth="100px"
                          containerWidth="330px"
                          required={true}
                        />
                      )}
                    />
                    <Controller
                      name="DienThoai"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Điện thoại"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="HoTen"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Họ tên"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          required
                        />
                      )}
                    />
                    <Controller
                      name="CMND"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="CMND"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="TinhTP"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Tỉnh/TP"
                          dataSource={["Hà Giang"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                          required
                        />
                      )}
                    />
                    <Controller
                      name="QuanHuyen"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Quận/Huyện"
                          dataSource={["Huyện Đồng Văn"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="Fax"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Fax"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="MST"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="MST"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="Website"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Website"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="Email"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Email"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              title="Thông tin người liên lạc"
              render={
                <div className="grid grid-cols-3 gap-4  pl-4 pr-4">
                  <div className="flex flex-col">
                    <Controller
                      name="NguoiLienLacHoTen"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Họ tên"
                          required
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="DienThoai"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Điện thoại"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="NguoiLienLacDiaChi"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Địa chỉ"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="NguoiLienLacDiDong"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Di động"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="NguoiLienLacGioiTinh"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Giới tính"
                          dataSource={["Nam", "Nữ"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                        />
                      )}
                    />
                    <Controller
                      name="NguoiLienLacEmail"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Email"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              title="Thông tin xe"
              headerRender={
                <div className="flex items-center gap-5">
                  <CheckBoxField field={""} label="Không có biển số" />
                  <ButtonCommon>Tìm kiếm xe chia sẻ</ButtonCommon>
                </div>
              }
              render={
                <div className="grid grid-cols-3 gap-4  pl-4 pr-4">
                  <div className="flex flex-col">
                    <Controller
                      name="BienSo"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Biển số"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          disabled={true}
                        />
                      )}
                    />
                    <Controller
                      name="SoKhung"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số khung"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          required
                        />
                      )}
                    />
                    <Controller
                      name="SoKm"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số Km"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="NgayRutHanBH"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Ngày hết hạn BH"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="SoKM_GDBH"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số KM GDBH"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="MauHieuXe"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Màu hiệu xe"
                          dataSource={["Chọn"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="HangXe"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Hãng xe"
                          dataSource={["HYUNDAI"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                          required
                        />
                      )}
                    />
                    <Controller
                      name="SoMay"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số máy"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="NgayMuaXe"
                      control={formControl}
                      render={({ field }) => (
                        <DateBoxField
                          field={field}
                          label="Ngày mua xe"
                          displayFormat="yyyy-MM-dd"
                          type="date"
                          labelWidth="100px"
                          containerWidth="330px"
                        />
                      )}
                    />
                    <Controller
                      name="NgayDKBH"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Ngày ĐKBH"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          disabled
                        />
                      )}
                    />
                    <Controller
                      name="NgayXNBH"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Ngày XNBH"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                          disabled
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="Model"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Model"
                          dataSource={["HYUNDAI"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                          required
                        />
                      )}
                    />
                    <Controller
                      name="Mau"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Màu"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="NamSanXuat"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Năm sản xuất"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="MaAVN"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Mã AVN"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                    <Controller
                      name="SoSeriAcQuy"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số seri Ac quy"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              title="Thông tin bảo hiểm"
              render={
                <div className="grid grid-cols-3 gap-4 pl-4 pr-4">
                  <div className="flex flex-col">
                    <Controller
                      name="HangBaoHiem"
                      control={formControl}
                      render={({ field }) => (
                        <SelectBoxField
                          field={field}
                          label="Hãng bảo hiểm"
                          dataSource={["HYUNDAI"]}
                          displayExpr={(item) => item}
                          labelWidth="100px"
                          width={200}
                          required
                        />
                      )}
                    />
                    <Controller
                      name="SoHopDong"
                      control={formControl}
                      render={({ field }) => (
                        <TextBoxField
                          field={field}
                          label="Số hợp đồng"
                          labelWidth="100px"
                          cssClass="w-[330px]"
                        />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="NgayBatDau"
                      control={formControl}
                      render={({ field }) => (
                        <DateBoxField
                          field={field}
                          label="Ngày bắt đầu"
                          displayFormat="yyyy-MM-dd"
                          type="date"
                          labelWidth="100px"
                          containerWidth="330px"
                        />
                      )}
                    />
                    <Controller
                      name="NgayKetThuc"
                      control={formControl}
                      render={({ field }) => (
                        <DateBoxField
                          field={field}
                          label="Ngày kết thúc"
                          displayFormat="yyyy-MM-dd"
                          type="date"
                          labelWidth="100px"
                          containerWidth="330px"
                        />
                      )}
                    />
                  </div>
                </div>
              }
            />
          </div>

          <div
            className="flex flex-col h-full mt-[5px] p-[10px]"
            style={{ display: currentTab === 1 ? "flex" : "none" }}
          >
            <div className="text-center p-4">
              Không có dữ liệu lịch sử sửa chữa
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <ButtonCommon>Lưu</ButtonCommon>
            <ButtonCommon>Xóa</ButtonCommon>
            <ButtonCommon>Đóng</ButtonCommon>
          </div>
        </form>
      </Popup>
    );
  }
);

export default ThongTinKhachHangVaXeModal;
