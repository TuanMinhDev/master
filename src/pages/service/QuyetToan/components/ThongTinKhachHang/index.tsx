import { TextBox, Button, SelectBox } from "devextreme-react";
import { Controller, useForm } from "react-hook-form";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { TextAreaField } from "@/packages/ui/hook-form-field/TextAreaField";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { forwardRef, useImperativeHandle, useState } from "react";

const ThongTinKhachHang = forwardRef((props, ref) => {
  const { control, setValue } = useForm<any>({
    defaultValues: {
      // Customer info
      HoVaTen: "",
      NguoiLienLac: "",
      DiaChi: "",
      DiDong: "",
      MstKh: "",
      YeuCauKH: "",
      TinhTrangNhanXe: "",
      
      // Vehicle info
      BienSo: "",
      SoVIN: "",
      HieuXe: "",
      Model: "",
      SoMay: "",
      MauXe: "",
      Km: "",
      
      // Additional info
      MaKyXet: "",
      HangThe: "",
      HangTheSau: "",
      GiaTriTDConLai: "",
      DiemTichTDTrongLuotDV: "",
      DiemTichKHTrongLuotDV: "",
      
      // RO info
      SoRO: "BG-VS058-231204-009"
    },
  });

  useImperativeHandle(ref, () => ({
    setFormData: (data: any) => {
      // Set customer data
      setValue("HoVaTen", data.HoVaTen || "");
      setValue("NguoiLienLac", data.NguoiLienLac || "");
      setValue("DiaChi", data.DiaChi || "");
      setValue("DiDong", data.DiDong || "");
      setValue("MstKh", data.MstKh || "");
      setValue("YeuCauKH", data.YeuCauKH || "");
      setValue("TinhTrangNhanXe", data.TinhTrangNhanXe || "");
      
      // Set vehicle data
      setValue("BienSo", data.BienSo || "");
      setValue("SoVIN", data.SoVIN || "");
      setValue("HieuXe", data.HieuXe || "");
      setValue("Model", data.Model || "");
      setValue("SoMay", data.SoMay || "");
      setValue("MauXe", data.MauXe || "");
      setValue("Km", data.Km || "");
      
      // Set additional data
      setValue("MaKyXet", data.MaKyXet || "");
      setValue("HangThe", data.HangThe || "");
      setValue("HangTheSau", data.HangTheSau || "");
      setValue("GiaTriTDConLai", data.GiaTriTDConLai || "");
      setValue("DiemTichTDTrongLuotDV", data.DiemTichTDTrongLuotDV || "");
      setValue("DiemTichKHTrongLuotDV", data.DiemTichKHTrongLuotDV || "");
      setValue("SoRO", data.SoRO || "BG-VS058-231204-009");
    },
  }));

  const handleSearch = () => {
    alert("Tìm kiếm");
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <SelectBox
              placeholder="Biển số"
              height={26}
              width={100}
              style={{ width: "90px" }}
            />
            <TextBox
              placeholder="Nhập"
              height={26}
              width={220}
              className="rounded-sm"
            />
            <Button
              icon="search"
              height={24}
              width={32}
              style={{
                backgroundColor: "#00703c",
                color: "#fff",
                borderRadius: "4px",
              }}
              onClick={() => alert("Tìm kiếm")}
            />
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap" style={{ width: "105px" }}>
              Số RO
            </span>
            <TextBox
              value=""
              readOnly
              height={26}
              width={300}
            />
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap" style={{ width: "105px" }}>
              Mã hội viên
            </span>
            <TextBox
              value=""
              readOnly
              height={26}
              width={300}
            />
          </div>

        </div>
      </div>
      <form id="FormThongTinKhachHang" className="flex flex-col">
        <CollapseHeader
          showCollapse={false}
          className="mt-[5px]"
          title="Thông tin khách hàng"
          render={
            <div className="grid grid-cols-4 mx-[30px] gap-[20px] pb-[10px]">
              <div className="flex flex-col">
                <Controller
                  name="HoVaTen"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Họ và tên"
                    />
                  )}
                />
                <Controller
                  name="NguoiLienLac"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Người liên lạc"
                    />
                  )}
                />
                <Controller
                  name="DiDong"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Di động"
                    />
                  )}
                />
                <Controller
                  name="MstKh"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="MST KH"
                    />
                  )}
                />
              </div>
              
              <div className="flex flex-col">
                <Controller
                  name="DiaChi"
                  control={control}
                  render={({ field }) => (
                    <TextAreaField
                      field={field}
                      label="Địa chỉ"
                    />
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
                    <TextAreaField
                      field={field}
                      label="Yêu cầu của KH"
                    />
                  )}
                />
              </div>
              
              <div className="flex flex-col">
                <Controller
                  name="BienSo"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Biển số"
                    />
                  )}
                />
                <Controller
                  name="SoVIN"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số VIN"
                    />
                  )}
                />
                <Controller
                  name="HieuXe"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Hiệu xe"
                    />
                  )}
                />
                <Controller
                  name="Model"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Model"
                    />
                  )}
                />
              </div>
              
              <div className="flex flex-col">
                <Controller
                  name="SoMay"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số máy"
                    />
                  )}
                />
                <Controller
                  name="MauXe"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Màu xe"
                    />
                  )}
                />
                <Controller
                  name="Km"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Km"
                    />
                  )}
                />
                <Controller
                  name="SoRO"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số RO"
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
          title="Thông tin Nội viên"
          render={
            <div className="grid grid-cols-4 mx-[30px] gap-[20px] pb-[10px]">
              <div className="flex flex-col">
                <Controller
                  name="MaKyXet"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Mã kỳ xét"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="HangThe"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Hạng thẻ"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="HangTheSau"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Hạng thẻ sau"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="GiaTriTDConLai"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Giá trị TD còn lại"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="DiemTichTDTrongLuotDV"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Điểm tích TD trong lượt DV"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="DiemTichKHTrongLuotDV"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Điểm tích KH trong lượt DV"
                    />
                  )}
                />
              </div>
            </div>
          }
        />
      </form>
    </div>
  );
});

export default ThongTinKhachHang;
