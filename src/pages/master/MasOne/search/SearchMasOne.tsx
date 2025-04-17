import { TextField } from "@/packages/components/text-field";
import SearchPanelLeft from "@/packages/ui/search-panel/search-panel-left";
import { useRef } from "react";

interface SearchMasOneProps {
  data: any;
  onSearch: (data: any) => void;
}

const SearchMasOne = ({ data, onSearch }: SearchMasOneProps) => {
  const searchPanelRef = useRef<any>(null);

  const formData = {
    ...data,
  };

  const onEnterKey = () => {
    searchPanelRef.current?.search();
  };

  const searchFields = [
    {
      visible: true,
      dataField: "GroupCode ",
      label: { text: "Mã vật tư" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];

        return (
          <TextField
            dataField={dataField}
            formInstance={formComponent}
            defaultValue={value}
            onValueChanged={(e: any) => {
              formComponent.updateData(dataField, e.value);
            }}
            placeholder="Nhập mã nhóm"
            showClearButton
            onEnterKey={onEnterKey}
          />
        );
      },
    },
    {
      visible: true,
      dataField: "GroupName ",
      label: { text: "Tên vật tư" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];

        return (
          <TextField
            dataField={dataField}
            formInstance={formComponent}
            defaultValue={value}
            onValueChanged={(e: any) => {
              formComponent.updateData(dataField, e.value);
            }}
            placeholder="Nhập tên nhóm"
            showClearButton
            onEnterKey={onEnterKey}
          />
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
      storeKey="MasOne-SearchForm"
      ref={searchPanelRef}
      checkValidFormData={checkValidFormData}
    />
  );
};

export default SearchMasOne;
