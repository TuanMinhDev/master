import {
  Popup,
  TabPanel,
  TextBox,
  SelectBox,
  DateBox,
  CheckBox,
  Button,
} from "devextreme-react";
import { CustomerData } from "./types";
import { useState } from "react";
import "./ThongTinKhachHangModal.scss";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { Controller, useForm } from "react-hook-form";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { TextAreaField } from "@/packages/ui/hook-form-field/TextAreaField";

interface ThongTinKhachHangModalProps {
  visible: boolean;
  onClose: () => void;
  onHiding: () => void;
  customerData: CustomerData | null;
}

const ThongTinKhachHangModal = ({
  visible,
  onClose,
  onHiding,
  customerData,
}: ThongTinKhachHangModalProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [hasLicensePlate, setHasLicensePlate] = useState(true);

  const { control, setValue } = useForm<any>({
    defaultValues: {
      // Customer info
      HoVaTen: customerData?.HoVaTen || "",
      NguoiLienLac: customerData?.NguoiLienLac || "",
      DiaChi: customerData?.DiaChi || "",
      DiDong: customerData?.DiDong || "",
      MstKh: customerData?.MstKh || "",
      YeuCauKH: customerData?.YeuCauKH || "",
      TinhTrangNhanXe: customerData?.TinhTrangNhanXe || "",

      // Vehicle info
      BienSo: customerData?.BienSo || "",
      SoVIN: customerData?.SoVIN || "",
      HieuXe: customerData?.HieuXe || "",
      Model: customerData?.Model || "",
      SoMay: customerData?.SoMay || "",
      MauXe: customerData?.MauXe || "",
      Km: customerData?.Km || "",

      // RO info
      SoRO: customerData?.SoRO || "",
    },
  });

  const handleTabChange = (e: any) => {
    setCurrentTab(e);
  };

  return (
    <Popup
      visible={visible}
      showTitle={true}
      title="Thông tin khách hàng và xe"
      onHiding={onHiding}
      height={700}
      width={1300}
      dragEnabled={true}
      showCloseButton={true}
    >
      <div className="p-2">
        <div className="mb-2">
          <TabPanel
            height="auto"
            width="100%"
            selectedIndex={currentTab}
            onSelectedIndexChange={handleTabChange}
            animationEnabled={true}
            swipeEnabled={true}
            className="custom-tab-panel"
            dataSource={[
              { title: "Khách hàng và xe", id: 0 },
              { title: "Lịch sử sửa chữa", id: 1 },
            ]}
          />
        </div>

        <div style={{ display: currentTab === 0 ? "block" : "none" }}>
          <form id="FormThongTinKhachHang" className="flex flex-col">
            <CollapseHeader
              showCollapse={false}
              className="mt-[5px]"
              title="Thông tin khách hàng"
              headerRender={
                <Controller
                  name="IsContact"
                  control={control}
                  render={({ field }) => (
                    <CheckBox
                      text="Khách hàng cũng là người liên lạc"
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    />
                  )}
                />
              }
              render={
                <div className="grid grid-cols-4 mx-[30px] gap-[20px] pb-[10px]">
                  <div className="flex flex-col">
                    <Controller
                      name="HoVaTen"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Họ và tên" />
                      )}
                    />
                    <Controller
                      name="NguoiLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Người liên lạc" />
                      )}
                    />
                    <Controller
                      name="DiDong"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Di động" />
                      )}
                    />
                    <Controller
                      name="MstKh"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="MST KH" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="DiaChi"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField field={field} label="Địa chỉ" />
                      )}
                    />
                    <Controller
                      name="TinhTrangNhanXe"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField
                          field={field}
                          label="Tình trạng khi tiếp nhận xe"
                        />
                      )}
                    />
                    <Controller
                      name="YeuCauKH"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField field={field} label="Yêu cầu của KH" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="BienSo"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Biển số" />
                      )}
                    />
                    <Controller
                      name="SoVIN"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số VIN" />
                      )}
                    />
                    <Controller
                      name="HieuXe"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Hiệu xe" />
                      )}
                    />
                    <Controller
                      name="Model"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Model" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="SoMay"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số máy" />
                      )}
                    />
                    <Controller
                      name="MauXe"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Màu xe" />
                      )}
                    />
                    <Controller
                      name="Km"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Km" />
                      )}
                    />
                    <Controller
                      name="SoRO"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số RO" />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              className="mt-[5px]"
              title="Thông tin người liên lạc"
              render={
                <div className="grid grid-cols-3 mx-[30px] gap-[20px] pb-[10px]">
                  <div className="flex flex-col">
                    <Controller
                      name="HoTenLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Họ tên" />
                      )}
                    />
                    <Controller
                      name="EmailLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Email" />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="DiaChiLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Địa chỉ" />
                      )}
                    />
                    <Controller
                      name="DiDongLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Di động" />
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Controller
                      name="GioiTinhLienLac"
                      control={control}
                      render={({ field }) => (
                        <SelectBox
                          value="Nam"
                          items={["Nam", "Nữ"]}
                          width="100%"
                        />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              className="mt-[5px]"
              title="Thông tin xe"
              headerRender={
                <div className="flex gap-5">
                  <Controller
                    name="IsContact"
                    control={control}
                    render={({ field }) => (
                      <CheckBox
                        text="Không có biển số "
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      />
                    )}
                  />
                  <button
                    style={{
                      backgroundColor: "#00703c",
                      color: "white",
                      padding: "8px 16px",
                      height: "30px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Tìm kiếm xe chia sẻ
                  </button>
                </div>
              }
              render={
                <div className="grid grid-cols-4 mx-[30px] gap-[20px] pb-[10px]">
                  <div className="flex flex-col">
                    <Controller
                      name="BienSO"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Biển số" />
                      )}
                    />
                    <Controller
                      name="NguoiLienLac"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số khung" />
                      )}
                    />
                    <Controller
                      name="DiDong"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số km" />
                      )}
                    />
                    <Controller
                      name="MstKh"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Ngày hết hạn bảo hiểm" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="DiaChi"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField field={field} label="Địa chỉ" />
                      )}
                    />
                    <Controller
                      name="TinhTrangNhanXe"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField
                          field={field}
                          label="Tình trạng khi tiếp nhận xe"
                        />
                      )}
                    />
                    <Controller
                      name="YeuCauKH"
                      control={control}
                      render={({ field }) => (
                        <TextAreaField field={field} label="Yêu cầu của KH" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="BienSo"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Biển số" />
                      )}
                    />
                    <Controller
                      name="SoVIN"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số VIN" />
                      )}
                    />
                    <Controller
                      name="HieuXe"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Hiệu xe" />
                      )}
                    />
                    <Controller
                      name="Model"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Model" />
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Controller
                      name="SoMay"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số máy" />
                      )}
                    />
                    <Controller
                      name="MauXe"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Màu xe" />
                      )}
                    />
                    <Controller
                      name="Km"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Km" />
                      )}
                    />
                    <Controller
                      name="SoRO"
                      control={control}
                      render={({ field }) => (
                        <TextBoxField field={field} label="Số RO" />
                      )}
                    />
                  </div>
                </div>
              }
            />

            <CollapseHeader
              showCollapse={false}
              className="mt-[5px]"
              title="Thông tin bảo hiểm"
              render={
                <div className="grid grid-cols-1 mx-[30px] gap-[20px] pb-[10px]">
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center">
                      <div className="text-[#5F7D95] text-[13px] font-normal mr-2 min-w-[100px]">Hãng bảo hiểm</div>
                      <Controller
                        name="HangBaoHiem"
                        control={control}
                        render={({ field }) => (
                          <SelectBox
                            value={field.value || "Chọn"}
                            items={["Chọn", "Bảo Việt", "Bảo Minh", "PVI"]}
                            width="200px"
                            onValueChanged={(e) => field.onChange(e.value)}
                          />
                        )}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-[#5F7D95] text-[13px] font-normal mr-2 min-w-[100px]">Số hợp đồng</div>
                      <Controller
                        name="SoHopDong"
                        control={control}
                        render={({ field }) => (
                          <TextBox
                            width="200px"
                            value={field.value}
                            onValueChanged={(e) => field.onChange(e.value)}
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center">
                      <div className="text-[#5F7D95] text-[13px] font-normal mr-2 min-w-[100px]">Ngày bắt đầu</div>
                      <Controller
                        name="NgayBatDau"
                        control={control}
                        render={({ field }) => (
                          <DateBox 
                            width="200px" 
                            displayFormat="yyyy-MM-dd"
                            value={field.value}
                            onValueChanged={(e) => field.onChange(e.value)}
                          />
                        )}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-[#5F7D95] text-[13px] font-normal mr-2 min-w-[100px]">Ngày kết thúc</div>
                      <Controller
                        name="NgayKetThuc"
                        control={control}
                        render={({ field }) => (
                          <DateBox 
                            width="200px" 
                            displayFormat="yyyy-MM-dd"
                            value={field.value}
                            onValueChanged={(e) => field.onChange(e.value)}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </form>

          <div className="flex justify-end gap-2 mt-4">
            <button
              style={{
                backgroundColor: "#00703c",
                color: "white",
                padding: "8px 16px",
                height: "30px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Lưu
            </button>
            <button
              style={{
                backgroundColor: "#00703c",
                color: "white",
                padding: "8px 16px",
                height: "30px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
            <button
              style={{
                backgroundColor: "#00703c",
                color: "white",
                padding: "8px 16px",
                height: "30px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              Đóng
            </button>
          </div>
        </div>

        {/* Tab Lịch sử sửa chữa */}
        <div style={{ display: currentTab === 1 ? "block" : "none" }}>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Lịch sử sửa chữa</h3>
            <p>Nội dung lịch sử sửa chữa sẽ được hiển thị ở đây</p>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ThongTinKhachHangModal;



