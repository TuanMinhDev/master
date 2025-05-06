import { CheckboxField } from "@/packages/components/checkbox-field";
import { TextField } from "@/packages/components/text-field";
import { useCommonLocale } from "@/packages/hooks/useCommonLocale";
import { useDialog } from "@/packages/hooks/useDiaglog";
import SearchPanelLeft from "@/packages/ui/search-panel/search-panel-left";
import { useRef } from "react";

interface SearchFormPops {
  data: any;
  onSearch: (data: any) => void;
}
export const SearchForm = ({ data, onSearch }: SearchFormPops) => {
  const searchPanelRef = useRef<any>(null);
  const { commonLocale } = useCommonLocale();
  const { showDialog } = useDialog();

  const formData = {
    ...data,
  };
  const searchFields: any[] = [
    {
      visible: true,
      dataField: "SupplierName",
      label: { text: "Tên nhà cung cấp" },
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
      dataField: "",
      label: { text: "" },
      visible: true,
      render: (param: any) => {
        const { dataField, component: formComponent } = param;

        return (
          <div className={"flex flex-col list-checkbox"}>
            <CheckboxField
              label={"Còn nợ"}
              dataField={"Deb"}
              formInstance={formComponent}
              defaultValue={!!formData?.["Deb"]}
              onValueChanged={(e: any) => {
                const value = e.value ? 1 : 0;
                formComponent.updateData("Deb", value);

                formComponent.updateData("IsDebit", value);
              }}
            />
            <CheckboxField
              label={commonLocale.CHECKBOX_FLAG_WH}
              dataField={dataField}
              formInstance={formComponent}
              defaultValue={formData?.[dataField] == 1 ? true : false}
              onValueChanged={(e: any) => {
                formComponent.updateData(dataField, e.value);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <SearchPanelLeft
      formData={formData}
      onSearch={onSearch}
      searchFields={searchFields}
      storeKey="QLDanhSachNoNCC-SearchForm"
      ref={searchPanelRef}
    />
  );
};
