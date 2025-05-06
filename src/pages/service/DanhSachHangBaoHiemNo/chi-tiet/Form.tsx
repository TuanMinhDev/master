import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { Controller, useForm } from "react-hook-form";
import TabPanel, { Item } from "devextreme-react/tab-panel";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { DataGrid } from "devextreme-react";
import { forwardRef } from "react";
import { TextAreaField } from "@/packages/ui/hook-form-field/TextAreaField";
import { useClientgateApi } from "@/packages/api";

export const Form = forwardRef((props, ref) => {
  const gridRef: any = useRef<DataGrid | null>(null);
  
  const { control, setValue } = useForm<any>({
    defaultValues: {
      InsNo: "",
      InsVieName: "",
      TelePhone: "",
      Address: "",
      TotalDebt: "",
      TotalPaid: "",
      RemainingDebt: "",
    },
  });
  const api = useClientgateApi();
  useImperativeHandle(ref, () => ({
    setFormData: (data: any) => {
      console.log("Insurance data received:", data);
      console.log("Insurance debit data:", data.lst_Ser_InsuranceDebit);

      gridRef.current?.setData(data.lst_Ser_InsuranceDebit);

      const item = data.lst_Ser_Insurance?.[0];

      const TotalDebt =
        data.lst_Ser_InsuranceDebit?.reduce((sum: number, curr: any) => {
          return sum + (Number(curr.DebitAmount) || 0);
        }, 0) || 0;
      const TotalPaid =
        data.lst_Ser_Payment?.reduce((sum: number, curr: any) => {
          return sum + (Number(curr.PaymentAmount) || 0);
        }, 0) || 0;
      setValue("InsNo", item?.InsNo || "");
      setValue("ContactName", item?.ContactName || "");
      setValue("Phone", item?.Phone || "");
      setValue("Address", item?.Address || "");
      setValue("ContactPhone", item?.ContactPhone || "");
      setValue("TotalDebt", TotalDebt.toLocaleString() || "0");
      setValue("TotalPaid", TotalPaid.toLocaleString() || "0");
      setValue(
        "RemainingDebt",
        (TotalDebt - TotalPaid).toLocaleString() || "0"
      );
    },
  }));

  const columns: any = [
    {
      dataField: "DebitDate",
      caption: "Ngày ghi nợ",
      visible: true,
    },
    {
      dataField: "PlateNo",
      caption: "Biển số",
      visible: true,
    },
    {
      dataField: "RONo",
      caption: "Lệnh sửa chữa",
      visible: true,
    },
    {
      dataField: "DebitAmount",
      caption: "Số tiền ghi nợ",
      visible: true,
      cellRender: (e: any) => {
        const value = Number(e.value) || 0;
        return value.toLocaleString();
      },
    },
    {
      dataField: "Note",
      caption: "Ghi chú",
      visible: true,
    },
  ];
  const columns2: any = [
    {
      dataField: "PayDate",
      caption: "Thời gian trả",
      visible: true,
    },
    {
      dataField: "PaymentAmount",
      caption: "Số tiền trả",
      visible: true,
      cellRender: (e: any) => {
        const value = Number(e.value) || 0;
        return value.toLocaleString();
      },
    },
    {
      dataField: "PayPersonName",
      caption: "Người trả nợ",
      visible: true,
    },
    {
      dataField: "PayPersonIDCardNo",
      caption: "Số CMND",
      visible: true,
    },
    {
      dataField: "Note",
      caption: "Ghi chú",
      visible: true,
    },
  ];

  const handleDeleteRow = async (data: any) => {
    const cusDebitID = data.row.data.CusDebitID;
    const currentList = gridRef.current?.getData();

    const newList = currentList?.filter(
      (item: any) => item.CusDebitID !== cusDebitID
    );

    gridRef.current?.setData(newList);

    return;

    // const deleteResp = await api.DanhSachHangBaoHiemNo_DeleteDebitDL(
    //   data.row.data.CusDebitID
    // );
    // if (deleteResp.isSuccess) {
    //   const insNo = resData?.lst_Ser_Insurance?.[0]?.InsNo;
    //   if (insNo) {
    //     const getResp = await api.DanhSachHangBaoHiemNo_GetByCusID(
    //       insNo,
    //       false
    //     );
    //     if (getResp.isSuccess && getResp.Data) {
    //       console.log(getResp.Data);

    //       setResData(getResp.Data);
    //     }
    //   }
    // }
  };

  return (
    <div>
      <form id="FormQL" className="flex flex-col">
        <CollapseHeader
          showCollapse={false}
          className="mt-[5px]"
          title="Thông tin cuộc hẹn"
          render={
            <div className="grid grid-cols-3 mx-[30px] gap-[75px] pb-[10px]">
              <div className="flex flex-col">
                <Controller
                  name="InsNo"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Mã hãng bảo hiểm"
                      disabled
                    />
                  )}
                />
                <Controller
                  name="InsVieName"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Tên hãng bảo hiểm"
                      disabled
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="TelePhone"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số điện thoại"
                      disabled
                    />
                  )}
                />
                <Controller
                  name="Address"
                  control={control}
                  render={({ field }) => (
                    <TextAreaField field={field} label="Địa chỉ" disabled />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="TotalDebt"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField field={field} label="Tổng nợ" disabled />
                  )}
                />
                <Controller
                  name="TotalPaid"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField field={field} label="Tổng đã trả" disabled />
                  )}
                />
                <Controller
                  name="RemainingDebt"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField field={field} label="Còn nợ" disabled />
                  )}
                />
              </div>
            </div>
          }
        />
      </form>
      <TabPanel>
        <Item title="Ghi nợ">
          <GridViewOne
            ref={gridRef}
            dataSource={[]}
            toolbarItems={[]}
            columns={columns}
            allowSelection={false}
            keyExpr={"InsuranceDebitId"}
            storeKey={"DanhSachHangBaoHiemNo"}
            autoFetchData={true}
            isHiddenCheckBox
            showSTT={true}
            hidePagination={true}
            editingOptions={{
              allowUpdating: false,
              allowDeleting: true,
            }}
            allowCheckDeleteConfirm={true}
            editMode={true}
            onRowDeleteBtnClick={(e: any) => handleDeleteRow(e)}
          />
        </Item>
        <Item title="Trả nợ">
            
        </Item>
      </TabPanel>
    </div>
  );
});
