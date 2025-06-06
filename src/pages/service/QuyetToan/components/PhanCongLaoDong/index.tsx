import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import ButtonCommon from "@/packages/ui/button/ButtonCommon";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import SearchPrimaryIcon from "@/packages/ui/icons/svg/search-primary";
import { ColumnOptions } from "@/types";
import { SelectBox, TextBox } from "devextreme-react";
import { useRef } from "react";
import SearchButton from "../../button/search";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";

export const PhanCongLaoDongPage = () => {
  const textBoxRef = useRef();
  const dataSource = [
    {
      STT: 1,
      MaCV: "",
      TenCV: "",
      LoaiDichVu: "Sữa chữa",
      DoiTuongTT: "",
      GioDM: "1.5",
      HeSoGia: "1.2",
      GioCong: 2,
      DonGia: 400000,
      ThanhTien: 960000,
      Thue: 5,
      GiaBaoHiem: 0,
      GhiChu: "",
    },
    {
      STT: 2,
      MaCV: "",
      TenCV: "",
      LoaiDichVu: "Lắp đặt",
      DoiTuongTT: "",
      GioDM: "0.5",
      HeSoGia: "1.0",
      GioCong: 1,
      DonGia: 300000,
      ThanhTien: 300000,
      Thue: 10,
      GiaBaoHiem: 0,
      GhiChu: "",
    },
    {
      STT: 3,
      MaCV: "",
      TenCV: "",
      LoaiDichVu: "Sữa chữa",
      DoiTuongTT: "",
      GioDM: "2.0",
      HeSoGia: "1.5",
      GioCong: 3,
      DonGia: 500000,
      ThanhTien: 2250000,
      Thue: 0,
      GiaBaoHiem: 5,
      GhiChu: "",
    },
    {
      STT: 4,
      MaCV: "",
      TenCV: "",
      LoaiDichVu: "",
      DoiTuongTT: "",
      GioDM: "2.0",
      HeSoGia: "1.5",
      GioCong: 3,
      DonGia: 500000,
      ThanhTien: 2250000,
      Thue: 0,
      GiaBaoHiem: 5,
      GhiChu: "",
    },
    {
      STT: 5,
      MaCV: "",
      TenCV: "",
      LoaiDichVu: "",
      DoiTuongTT: "",
      GioDM: "2.0",
      HeSoGia: "1.5",
      GioCong: 3,
      DonGia: 500000,
      ThanhTien: 2250000,
      Thue: 0,
      GiaBaoHiem: 5,
      GhiChu: "",
    },
  ];

  const columns: ColumnOptions[] = [
    {
      dataField: "STT",
      caption: "STT",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      width: 80,
    },
    {
      dataField: "MaCV",
      caption: "Mã CV",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      width: 120,
    },
    {
      dataField: "TenCV",
      caption: "Tên CV",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
    },
    {
      dataField: "LoaiDichVu",
      caption: "Loại dịch vụ",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => (
        <SelectBox
          defaultValue={data.LoaiDichVu}
          dataSource={["Sửa chữa", "Lắp đặt"]}
          onValueChanged={(e) => {
            data.LoaiDichVu = e.value;
          }}
        />
      ),
    },
    {
      dataField: "DoiTuongTT",
      caption: "Đối tượng thanh toán",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => (
        <SelectBox
          defaultValue={data.DoiTuongTT}
          dataSource={["Khách hàng", "Bảo hiểm"]}
          onValueChanged={(e) => {
            data.DoiTuongTT = e.value;
          }}
        />
      ),
    },
    {
      dataField: "GioDM",
      caption: "Giờ ĐM",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
    },
    {
      dataField: "HeSoGia",
      caption: "Hệ số giá",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => <TextBox defaultValue={data.HeSoGia} />,
    },
    {
      dataField: "GioCong",
      caption: "Giờ công",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => <TextBox defaultValue={data.GioCong} />,
    },
    {
      dataField: "DonGia",
      caption: "Đơn giá",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => <TextBox defaultValue={data.DonGia} />,
    },
    {
      dataField: "ThanhTien",
      caption: "Thành tiền",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
    },
    {
      dataField: "Thue",
      caption: "Thuế(%)",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => <TextBox defaultValue={data.Thue} />,
    },
    {
      dataField: "GiaBaoHiem",
      caption: "Giá bảo hiểm",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      cellRender: ({ data }) => <TextBox defaultValue={data.GiaBaoHiem} />,
    },
    {
      dataField: "GhiChu",
      caption: "Ghi chú",
      visible: true,
      columnIndex: 1,
      editorType: "dxTextBox",
      width: 200,
      cellRender: ({ data }) => <TextBox defaultValue={data.GhiChu} />,
    },
  ];

  return (
    <>
      <CollapseHeader
        showCollapse={true}
        className="small-monitor"
        title="Phân công lao động (12)"
        render={
          <div className="mx-[16px] mt-[5px]">
            <GridViewOne
              dataSource={dataSource}
              columns={columns}
              autoFetchData={false}
              allowSelection={true}
              showSTT={false}
              keyExpr={"STT"}
              storeKey={"PhanCongLaoDongGrid"}
              customHeight={205}
              hideHeader={true}
              loadPanel={false}
            />
          </div>
        }
        headerRender={
          <div className="flex items-center gap-[10px] w-full  ">
            <div className="flex items-center gap-[8px]">
              <TextBoxField
                field={""}
                
              />
              <SearchButton />
              <ButtonCommon size="small" >Xóa</ButtonCommon>
              <ButtonCommon size="small" >Điền nhiều hàng</ButtonCommon>
            </div>
            <div className="flex items-center gap-[8px] pl-[100px]">
              <label className="font-semibold text-[14px] text-[#1e2c50]">
                Tổng tiền:
              </label>
              <div className="bg-[#f7f9fa] px-[8px] py-[2px] border rounded-[4px] min-w-[100px] text-right font-semibold text-[#1e2c50]">
                20.000.000
              </div>
              <div className="bg-[#f7f9fa] px-[8px] py-[2px] border rounded-[4px] min-w-[100px] text-right font-semibold text-[#1e2c50]">
                500.000
              </div>
              <div className="bg-[#f7f9fa] px-[8px] py-[2px] border rounded-[4px] min-w-[100px] text-right font-semibold text-[#1e2c50]">
                500.000
              </div>
            </div>
          </div>
        }
        showExpand
      ></CollapseHeader>
    </>
  );
};


