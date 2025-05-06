import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { Controller, useForm } from "react-hook-form";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import TabPanel, { Item } from "devextreme-react/tab-panel";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { DataGrid } from "devextreme-react";
export const FormQLDSNNCC = forwardRef(({ onSaving }: any, ref) => {
  const gridRef: any = useRef<DataGrid | null>(null);
  const [resData, setResData] = useState<any>({});
  const {
    control,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      SupplierName: "",
      ContactName: "",
      Phone: "",
      Address: "",
      ContactPhone: "",
      TotalDebt: "",
      TotalPaid: "",
      RemainingDebt: "",
    },
  });

  useEffect(() => {
    console.log("Current resData:", resData);
    console.log("Debit data available:", resData?.lst_Ser_SupplierDebit);
  }, [resData]);

  useImperativeHandle(ref, () => ({
    setFormData: (data: any) => {
      console.log("setFormData received:", data);

      if (!data) {
        console.error("Received null or undefined data");
        return;
      }

      setResData(data);

      const item = data.lst_Ser_Mst_Supplier?.[0];
      if (!item) {
        console.error("No supplier data found in lst_Ser_Mst_Supplier");
      }

      
      if (
        !data.lst_Ser_SupplierDebit ||
        data.lst_Ser_SupplierDebit.length === 0
      ) {
        console.warn("No debit data found in lst_Ser_SupplierDebit");
      } else {
        console.log("Debit data count:", data.lst_Ser_SupplierDebit.length);
      }

      const TotalDebt = data.lst_Ser_SupplierDebit.reduce(
        (sum: number, curr: any) => {
          return sum + (Number(curr.DebitAmount) || 0);
        },
        0
      );
      const TotalPaid = data.lst_Ser_Payment.reduce(
        (sum: number, curr: any) => {
          return sum + (Number(curr.PaymentAmount) || 0);
        },
        0
      );
      setValue("SupplierName", item?.SupplierName || "");
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
  const handleDeleteRow = (data: any) => {};
  const columns: any = [
    {
      dataField: "STT",
      caption: "STT",
      width: 80,
      alignment: "center",
      allowSorting: false,
      cellRender: (e: any) => {
        return e.rowIndex + 1;
      },
    },
    {
      dataField: "",
      caption: "",
      visible: true,
      width: 50,
      cellRender: (e: any) => {
        return (
          <span
            className="dx-icon dx-icon-trash text-red-600 cursor-pointer"
            onClick={() => handleDeleteRow(e.data)}
            title="Xóa"
          />
        );
      },
    },
    {
      dataField: "DebitDate",
      caption: "Ngày ghi nợ",
      visible: true,
    },
    {
      dataField: "StockInNo",
      caption: "Số phiếu nhập",
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
      caption: "Ngày ghi nợ",
      visible: true,
    },
    {
      dataField: "PaymentAmount",
      caption: "Số tiền ghi nợ",
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
                  name="SupplierName"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Tên nhà cung cấp"
                      disabled
                    />
                  )}
                />
                <Controller
                  name="Phone"
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
                    <TextBoxField field={field} label="Địa chỉ" disabled />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Controller
                  name="ContactName"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Người liên hệ"
                      disabled
                    />
                  )}
                />
                <Controller
                  name="ContactPhone"
                  control={control}
                  render={({ field }) => (
                    <TextBoxField
                      field={field}
                      label="Số ĐT liên hệ"
                      disabled
                    />
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
          {!resData?.lst_Ser_SupplierDebit ? (
            <div className="p-4 text-center">Không có dữ liệu ghi nợ</div>
          ) : (
            <GridViewOne
              ref={gridRef}
              dataSource={resData.lst_Ser_SupplierDebit || []}
              toolbarItems={[]}
              columns={columns}
              fetchData={() => {
                return {
                  DataList: resData.lst_Ser_SupplierDebit || [],
                  PageIndex: 0,
                  PageSize: 100,
                  PageCount: 1,
                  ItemCount: (resData.lst_Ser_SupplierDebit || []).length,
                };
              }}
              allowSelection={false}
              keyExpr={"SupplierDebitId"}
              storeKey={"QLDanhSachNoNCC"}
              autoFetchData={true}
              isHiddenCheckBox
              showSTT={false}
              hidePagination={true}
            />
          )}
        </Item>
        <Item title="Trả nợ">
          {!resData?.lst_Ser_Payment ? (
            <div className="p-4 text-center">Không có dữ liệu ghi nợ</div>
          ) : (
            <GridViewOne
              ref={gridRef}
              dataSource={resData.lst_Ser_Payment || []}
              toolbarItems={[]}
              columns={columns2}
              fetchData={() => {
                return {
                  DataList: resData.lst_Ser_Payment || [],
                  PageIndex: 0,
                  PageSize: 100,
                  PageCount: 1,
                  ItemCount: (resData.lst_Ser_Payment || []).length,
                };
              }}
              allowSelection={false}
              keyExpr={"SupplierDebitId"}
              storeKey={"QLDanhSachNoNCC"}
              autoFetchData={true}
              isHiddenCheckBox
              showSTT={false}
              hidePagination={true}
            />
          )}
        </Item>
      </TabPanel>
    </div>
  );
});
