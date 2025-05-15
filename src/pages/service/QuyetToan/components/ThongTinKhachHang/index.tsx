import { TextBox, Button, SelectBox } from "devextreme-react";
import { Controller, useForm } from "react-hook-form";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { TextAreaField } from "@/packages/ui/hook-form-field/TextAreaField";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { forwardRef, useImperativeHandle, useState } from "react";

import { SelectBoxField } from "@/packages/ui/hook-form-field/SelectBoxField";

import SearchButton from "../../button/search";

const ThongTinKhachHang = forwardRef((props, ref) => {
  const { control, setValue } = useForm<any>({
    defaultValues: {
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
      SoRO: "BG-VS058-231204-009",
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

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 pl-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Controller
              name="searchType"
              control={control}
              defaultValue="Biển số"
              render={({ field }) => (
                <SelectBoxField
                  field={field}
                  dataSource={["Biển số", "Số khung", "Số máy"]}
                  displayExpr={(item) => item}
                  width={100}
                />
              )}
            />
            <Controller
              name="searchField"
              control={control}
              render={({ field }) => (
                <TextBoxField
                  field={field}
                  
                />
              )}
            />
            <SearchButton />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Controller
            name="searchField"
            control={control}
            render={({ field }) => (
              <TextBoxField
                field={field}
                showPlaceholder={true}
                
                
                label="Số RO"
                required={true}
                disabled={true}
                labelWidth="70px"
                cssClass="w-[300px]"
              />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Controller
            name="searchField"
            control={control}
            render={({ field }) => (
              <TextBoxField
                field={field}
                showPlaceholder={true}
                 labelWidth="70px"
                cssClass="w-[300px]"
                label="Mã hội viên"
                disabled={true}
              />
            )}
          />
        </div>
      </div>
      <form id="FormThongTinKhachHang" className="flex flex-col">
        <CollapseHeader
          showCollapse={false}
          className="mt-[5px]"
          title="Thông tin khách hàng"
          headerRender={
            <div className="flex items-center gap-[8px]">
              <label className="ml-[420px]">Thông tin xe</label>
            </div>
          }

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
                      disabled={true}
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
                      disabled={true}
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
                      disabled={true}
                    />
                  )}
                />
                <Controller
                  name="MstKh"
                  control={control}
                  render={({ field }) => (
                    <TextAreaField
                      field={field}
                      label="Yêu cầu của KH"
                      disabled={true}
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
                      disabled={true}
                    />
                  )}
                />

                <Controller
                  name="YeuCauKH"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="MST KH"
                      disabled={true}
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
                      disabled={true}
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
                      disabled={true}
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
                      disabled={true}
                    />
                  )}
                />
                <Controller
                  name="SoMay"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số máy"
                      disabled={true}
                    />
                  )}
                />

                <Controller
                  name="Km"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField field={field} label="Km" disabled={true} />
                  )}
                />
              </div>

              <div className="flex flex-col">
                <Controller
                  name="SoVin"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số Vin"
                      disabled={true}
                    />
                  )}
                />
                <Controller
                  name="Model"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField field={field} label="Model" disabled={true} />
                  )}
                />
                <Controller
                  name="MauXe"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Màu xe"
                      disabled={true}
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
                      disabled={true}
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
                      label="Hạng thẻ sau tích"
                      disabled={true}
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
                      disabled={true}
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
                      label="Điểm tích XH trong lượt DV"
                      disabled={true}
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
                      disabled={true}
                    />
                  )}
                />
              </div>{" "}
              <div className="flex flex-col">
                <Controller
                  name="GiaTriTDConLai"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Giá trị TD còn lại"
                      disabled={true}
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
