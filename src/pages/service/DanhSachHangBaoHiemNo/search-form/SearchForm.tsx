import { CheckboxField } from "@/packages/components/checkbox-field";
import { TextField } from "@/packages/components/text-field";
import { useCommonLocale } from "@/packages/hooks/useCommonLocale";
import SearchPanelLeft from "@/packages/ui/search-panel/search-panel-left";
import { useRef } from "react";

interface SearchFormPops {
  data: any;
  onSearch: (data: any) => void;
}
export const SearchForm = ({ data, onSearch }: SearchFormPops) => {
  const searchPanelRef = useRef<any>(null);
  const { commonLocale } = useCommonLocale();
  const formData = {
    ...data,
  };
  const searchFields: any[] = [
    {
      visible: true,
      dataField: "InsName",
      label: { text: "Tên hàng BH" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];
        return (
          <div className="flex flex-row">
            <TextField
              dataField={dataField}
              formInstance={formComponent}
              defaultValue={value}
              onValueChange={(e: any) => {
                formComponent.updateData(dataField, e.value);
              }}
              placeholder="Nhập"
              showClearButton={true}
            />
          </div>
        );
      },
    },
    {
      dataField: "IsDebit",
      label: { text: "", visible: false },
      visible: true,
      render: (param: any) => {
        const { dataField, component: formComponent } = param;

        return (
          <div className={"flex flex-col list-checkbox"}>
            <CheckboxField
              label={"Còn nợ"}
              dataField={"IsDebit"}
              formInstance={formComponent}
              defaultValue={!!formData?.["IsDebit"]}
              onValueChanged={(e: any) => {
                const value = e.value ? 1 : 0;
                formComponent.updateData("IsDebit", value);
              }}
            />
          </div>
        );
      },
    },
    {
      dataField: "FlagDataWH",
      label: { text: "", visible: false },
      visible: true,
      render: (param: any) => {
        const { dataField, component: formComponent } = param;

        return (
          <div>
            <CheckboxField
              label={"Dữ liệu lịch sử"}
              dataField={dataField}
              formInstance={formComponent}
              defaultValue={!!formData?.["FlagDataWH"]}
              onValueChanged={(e: any) => {
                const value = e.value ? true : false;
                formComponent.updateData(dataField, value);
              }}
            />
          </div>
        );
      },
    },
  ];
  const checkValidFormData = (formData: any) => {
    return true;
  };
  return (
    <SearchPanelLeft
      formData={formData}
      onSearch={onSearch}
      searchFields={searchFields}
      storeKey="DanhSachHangBaoHiemNo-SearchForm"
      ref={searchPanelRef}
      checkValidFormData={checkValidFormData}
    />
  );
};
