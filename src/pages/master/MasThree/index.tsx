import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { useRef } from "react";
import { SearchForm } from "./search/SearchForm";
import { DataGrid } from "devextreme-react";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { useGridColumns } from "./components/use-columns";
import { useClientgateApi } from "@/packages/api";
import PopupFromGrid, {
  IAPI,
  IGroupColumnPopup,
} from "@/packages/components/popup/PopupFromGrid/PopupFromGrid";
import {useSerMSTPartGroupDataSource, useSerMSTPartTypeDataSource } from "../SerCavity/datasource/useDataSource";
import { useI18n } from "@/i18n/useI18n";


const MasThree = () => {
  const popupRef = useRef<any>(null);
  const gridRef: any = useRef<DataGrid | null>(null);
  const columns = useGridColumns({ data: [], popupRef });
  const handleAdd = () => {
    popupRef.current?.showPopup({
      type: "create",
      data: null,
    });
  };
  const searchCondition = useRef<any>({
    PartCode: "",
    VieName: "",
    PartGroupID: "",
    IsActive: "",
    FreqUsed: "",
    Ft_PageIndex: 0,
    Ft_PageSize: 100,
  });
  const onRefetchData = async (number?: number) => {
    gridRef.current?.refetchData(number);
  };
  const handleSearch = async (data: any) => {
    searchCondition.current = {
      ...searchCondition.current,
      ...data,
    };
    await onRefetchData();
  };
  const api = useClientgateApi();
  const fetchData = async () => {
    const response = await api.Mas_Three_Search({
      PartCode: searchCondition.current.PartCode,
      VieName: searchCondition.current.VieName,
      IsActive: searchCondition.current.IsActive,
      PartGroupID: searchCondition.current.PartGroupID,
      FreqUsed: searchCondition.current.FreqUsed,
      Ft_PageIndex: gridRef?.current?.getDxInstance()?.pageIndex() ?? 0,
      Ft_PageSize: gridRef?.current?.getDxInstance()?.pageSize() ?? 100,
    });
    return response;
  };
  const api_popup: IAPI = {
    api_create: async (formData) => {
      const data = {
        PartGroupID: formData.PartGroupID,
        PartTypeID: formData.PartTypeID,
        PartCode: formData.PartCode,
        VieName: formData.VieName,
        EngName: formData.EngName || null,
        Cost: formData.Cost >= 0 ? formData.Cost : 0,
        PriceEffect: formData.PriceEffect >= 0 ? formData.PriceEffect : 0,
        VAT: formData.VAT,
        Unit: formData.Unit,
        Location: formData.Location || null,
        MinQuantity: formData.MinQuantity ?? 0,
        Model: formData.Model || null,
        Note: formData.Note || null,
        FreqUsed: formData.FreqUsed,
      };
      return api.Mas_Three_Create(data);
    },

    api_update: async (formData) => {
      const data = {
        PartGroupID: formData.PartGroupID,
        PartTypeID: formData.PartTypeID,
        PartCode: formData.PartCode,
        VieName: formData.VieName,
        EngName: formData.EngName || null,
        Cost: formData.Cost >= 0 ? formData.Cost : 0,
        PriceEffect: formData.PriceEffect >= 0 ? formData.PriceEffect : 0,
        VAT: formData.VAT,
        Unit: formData.Unit,
        Location: formData.Location || null,
        MinQuantity: formData.MinQuantity ?? 0,
        Model: formData.Model || null,
        Note: formData.Note || null,
        FreqUsed: formData.FreqUsed,
      };
      return api.Mas_Three_Update(data);
    },
    api_delete: async (formData) => {
      return api.Mas_Three_Delete(formData);
    },
  };

  const columns_popup: IGroupColumnPopup[] = [
    {
      columns: [
        {
          dataField: "PartGroupID",
          caption: ("Loại vật tư"),
          editorType: "dxSelectBox",
          required: true,
          rules: {
            required: "Vui lòng chọn loại vật tư!",
          },
          editorOptions: {
            displayExpr: "GroupName",
            valueExpr: "PartGroupID",
            searchEnabled: false,
          },
        },
        {
          dataField: "PartTypeID",
          caption: "Loại hàng",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập mã !",
          },
          editorOptions: {
            disabled: (data: any) => {
              return data?.Type == "detail";
            },
          },
        },
        {
          dataField: "PartCode",
          caption: "Mã vật tư",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập mã !",
          },
          editorOptions: {
            disabled: (data: any) => {
              return data?.Type == "detail";
            },
          },
        },
        {
          dataField: "VieName",
          caption: "Tên vật tư",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập tên !",
          },
        },
        {
          dataField: "EngName",
          caption: "Tên tiếng anh",
          editorType: "dxTextBox",
          required: false,
          rules: {
            required: "Vui lòng nhập tên !",
          },
        },
      ],
    },
    {
      columns: [
        {
          dataField: "Cost",
          caption: "Giá nhập",
          editorType: "dxNumberBox",
          required: true,
          editorOptions: {
            value: 0,
            showSpinButtons: false,
            min: 0,
          },
        },
        {
          dataField: "PriceEffect",
          caption: "Giá bán",
          editorType: "dxNumberBox",
          required: true,
          editorOptions: {
            value: 0,
            showSpinButtons: false,
            min: 0,
          },
        },
        {
          dataField: "VAT",
          caption: ("VAT"),
          editorType: "dxNumberBox",
          required: true,
          rules: {
            required: "Vui lòng nhập VAT!",
            min:
            {
              value: 0,
              message: "VAT phải >= 0"
            },
            max:
            {
              value: 100,
              message: "VAT phải <= 100"
            }
          },
          editorOptions: {
            disabled: (data: any) => {
              return data?.Type == "detail";
            },
            type: "number",
          },
        },
        {
          dataField: "Unit",
          caption: "Đơn vị",
          editorType: "dxTextBox",
          required: false,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Location",
          caption: "Vị trí",
          editorType: "dxTextBox",
          required: false,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
      ],
    },
    {
      columns: [
        {
          dataField: "MinQuantity",
          caption: "Số lượng tối thiểu",
          editorType: "dxNumberBox",
          required: false,
          editorOptions: {
            value: 0,
            showSpinButtons: false,
            min: 0,
          },
        },

        {
          dataField: "Model",
          caption: "Model",
          editorType: "dxTextBox",
          required: false,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Note",
          caption: "Ghi chú",
          editorType: "dxTextBox",
          required: false,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "FreqUsed",
          caption: ("Hãy sử dụng"),
          editorType: "dxCheckBox",
          required: false,
          rules: {
            
          },
          editorOptions: {
            labelPosion: "left"
          }
        },

      ],
    },
  ];
  const title_popup: any = {
    title_create: "Tạo mới",
    title_detail: "Chi tiết",
  };
  
  const dataSourceSerMSTPartGroupPopup = useSerMSTPartGroupDataSource();
  const dataSourceSerMSTPartTypePopup = useSerMSTPartTypeDataSource();

  const onMountInitial = async () => {
    const listSerMSTPartGroup = await dataSourceSerMSTPartGroupPopup.getListSerMSTPartGroup();
    const listSerMSTPartType = await dataSourceSerMSTPartTypePopup.getListSerMSTPartType();
    return { 
      ListPartGroupID: listSerMSTPartGroup,
      ListPartTypeID: listSerMSTPartType,
     };
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Quản lý danh sách phụ tùng"
          showSearch={false}
          buttonOptions={{
            showButtonAdd: true,
            onClickButtonAdd: handleAdd,
          }}
        />
      </AdminContentLayout.Slot>
      <AdminContentLayout.Slot name={"Content"}>
        <ContentSearchPanelLayout searchPermissionCode="">
          <ContentSearchPanelLayout.Slot name={"SearchPanel"}>
            <SearchForm
              data={searchCondition.current}
              onSearch={handleSearch}
            />
          </ContentSearchPanelLayout.Slot>
          <ContentSearchPanelLayout.Slot name={"ContentPanel"}>
            <GridViewOne
              ref={gridRef}
              dataSource={[]}
              columns={columns}
              showSTT={true}
              fetchData={fetchData}
              autoFetchData={true}
              keyExpr={"PartCode"}
              storeKey={"MasThree"}
              allowSelection={false}

            />
            <PopupFromGrid
              ref={popupRef}
              onRefetchData={onRefetchData}
              api={api_popup}
              groupColumn={columns_popup}
              title={title_popup}
              onMountInitial={onMountInitial}
              firstDefaultValue
              localeKey="Mas_Three"
              primaryKey={"PartID"}
            ></PopupFromGrid>
          </ContentSearchPanelLayout.Slot>
        </ContentSearchPanelLayout>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
export default MasThree;
