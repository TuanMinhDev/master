import { TextField } from "@/packages/components/text-field";
import SearchPanelLeft from "@/packages/ui/search-panel/search-panel-left";
import { useRef } from "react";

interface SearchFormProps {
  data: any;
  onSearch: (data: any) => void;
}
export const SearchForm = ({ data, onSearch }: SearchFormProps) => {
  const searchPanelRef = useRef<any>(null);
  const formData = {
    ...data,
  };
  const onEnterKey = () => {
    searchPanelRef.current?.search();
  };
  const searchFields: any[] = [
    {
      visible: true,
      dataField: "SerCode",
      label: { text: "Mã công việc" },
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
              onEnterKey={onEnterKey}
            />
          </div>
        );
      },
    },
    {
        visible: true,
        dataField: "SerName",
        label: { text: "Tên công việc" },
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
              onEnterKey={onEnterKey}
            />
          </div>
        );
        }
    }
  ];
  const checkValidFormData = () => {
    return true;
  };
  return (
    <SearchPanelLeft
      formData={formData}
      onSearch={onSearch}
      searchFields={searchFields}
      storeKey="MasTwo-SearchForm"
      ref={searchPanelRef}
      checkValidFormData={checkValidFormData}

    />
  );
};
