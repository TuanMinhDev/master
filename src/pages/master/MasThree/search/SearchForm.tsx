import { useI18n } from "@/i18n/useI18n";
import { useClientgateApi } from "@/packages/api";
import { SelectField } from "@/packages/components/select-field";
import { TextField } from "@/packages/components/text-field";
import { showErrorAtom } from "@/packages/store";
import SearchPanelLeft from "@/packages/ui/search-panel/search-panel-left";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
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
  const { t } = useI18n("Ser_Cavity");
  const api = useClientgateApi();
  const showError = useSetAtom(showErrorAtom);

  const { data: getMasThreePartGroupName } = useQuery({
    queryKey: ["getMasThreePartGroupID"],
    queryFn: async () => {
      const response = await api.Mas_Three_GetAllPartTypeName();
      if (response.isSuccess) {
        return [
          {
            GroupCode: "",
            GroupName: "Tất cả",
          },
          ...(response.DataList as any),
        ];
      } else {
        showError({
          message: t(response._strErrCode),
          _strErrCode: response._strErrCode,
          _strTId: response._strTId,
          _strAppTId: response._strAppTId,
          _objTTime: response._objTTime,
          _strType: response._strType,
          _dicDebug: response._dicDebug,
          _dicExcs: response._dicExcs,
        });
      }
    },
  });
  const searchFields: any[] = [
    {
      visible: true,
      dataField: "PartCode",
      label: { text: "Mã phụ tùng" },
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
      visible: true,
      dataField: "VieName",
      label: { text: "Tên phụ tùng" },
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
      visible: true,
      dataField: "PartGroupName",
      label: { text: "Loại vật tư" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];
        console.log("getMasThreePartGroupName", getMasThreePartGroupName);
        return (
          <SelectField
            width={270}
            showClearButton={false}
            items={
              getMasThreePartGroupName?.map((item: any) => {
                return {
                  text:
                    item.PartGroupIDName !== ""
                      ? `${item.GroupName}`
                      : `${item.GroupName}`,
                  value: item.GroupName,
                };
              }) ?? []
            }
            displayExpr={"text"}
            searchEnabled={false}
            valueExpr={"value"}
            defaultValue={value}
            dataField={dataField}
            formInstance={formComponent}
            onValueChanged={(e: any) => {
              formComponent.updateData(dataField, e.value);
            }}
          />
        );
      },
    },
    {
      visible: true,
      dataField: "IsActive",
      label: { text: "Trạng thái" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];
        return (
          <div className="flex flex-row">
            <SelectField
              dataField={dataField}
              defaultValue={formData?.[dataField]}
              formInstance={formComponent}
              items={[
                {
                  value: "",
                  text: "Tất cả",
                },
                {
                  value: "1",
                  text: "Kích hoạt",
                },
                {
                  value: "0",
                  text: "Không kích hoạt",
                },
              ]}
            />
          </div>
        );
      },
    },
    {
      visible: true,
      dataField: "FreqUsed",
      label: { text: "Tình trạng sử dụng" },
      render: (param: any) => {
        const { dataField, component: formComponent } = param;
        const formData = formComponent.option("formData");
        const value = formData[dataField];
        return (
          <div className="flex flex-row">
            <SelectField
              dataField={dataField}
              defaultValue={formData?.[dataField]}
              formInstance={formComponent}
              items={[
                {
                  value: "",
                  text: "Tất cả",
                },
                {
                  value: "1",
                  text: "Hay sử dụng",
                },
                {
                  value: "0",
                  text: "Ít sử dụng",
                },
              ]}
            />
          </div>
        );
      },
    },
  ];
  const checkValidFormData = () => {
    return true;
  };
  return (
    <SearchPanelLeft
      formData={formData}
      onSearch={onSearch}
      searchFields={searchFields}
      storeKey="MasThree-SearchForm"
      ref={searchPanelRef}
      checkValidFormData={checkValidFormData}
    />
  );
};
