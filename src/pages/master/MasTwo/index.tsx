import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { useRef } from "react";
import { DataGrid } from "devextreme-react";
import { useGridColumns } from "./components/use-columns";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import { useClientgateApi } from "@/packages/api";
import { SearchForm } from "./search/SearchMasTwo";
import PopupFromGrid, {
  IAPI,
  IGroupColumnPopup,
  ITitlePopup,
} from "@/packages/components/popup/PopupFromGrid/PopupFromGrid";
import { useMstLocationDataSource } from "../SerCavity/datasource/useDataSource";

const MasTwo = () => {
  const popupRef = useRef<any>(null);
  const gridRef: any = useRef<DataGrid | null>(null);
  const columns = useGridColumns({ data: [], popupRef });
  const api = useClientgateApi();
  const dataSourcePopup = useMstLocationDataSource();

  const handleAdd = () => {
    popupRef.current?.showPopup({
      type: "create",
      data: null,
    });
  };
  const searchCondition = useRef<any>({
    SerCode: "",
    SerName: "",
    IsActive: "1",
    Ft_PageIndex: 0,
    Ft_PageSize: 100,
  });
  const handleSearch = async (data: any) => {
    searchCondition.current = {
      ...searchCondition.current,
      ...data,
    };
    await onRefetchData();
  };

  const fetchData = async () => {
    const response = await api.Mas_Two_Search({
      SerCode: searchCondition.current.SerCode,
      SerName: searchCondition.current.SerName,
      IsActive: searchCondition.current.IsActive,
      Ft_PageIndex: gridRef?.current?.getDxInstance()?.pageIndex() ?? 0,
      Ft_PageSize: gridRef?.current?.getDxInstance()?.pageSize() ?? 100,
    });
    return response;
  };
  const onRefetchData = async (number?: number) => {
    gridRef.current?.refetchData(number);
  };
  const api_popup: IAPI = {
    api_create: async (formData) => {
      const param = {
        SerCode: formData.SerCode,
        SerName: formData.SerName,
        SerTypeID: formData.SerTypeID,
        StdManHour: formData.StdManHour,
        Cost: formData.Cost,
        Price: formData.Price,
        VAT: formData.VAT,
        Model: formData.Model,
        Note: formData.Note,
      };
      return api.Mas_Two_Create(param);
    },
    api_update: async (formData) => {
      const dataList = gridRef.current.getVisibleData();
      const d = dataList.find((item: any) => item.SerID === formData.SerID);
      const param = {
        SerID: d.SerID,
        TypeID: formData.TypeID,
        SerCode: formData.SerCode,
        SerName: formData.SerName,
        SerTypeID: formData.SerTypeID,
        StdManHour: formData.StdManHour,
        Cost: formData.Cost,
        Price: formData.Price,
        VAT: formData.VAT,
        Model: formData.Model,
        Note: formData.Note,
        IsActive: formData.IsActive,
      };
      return api.Mas_Two_Update(param);
    },
    api_delete: async (formData) => {
      return api.Mas_Two_Delete(formData);
    },
  };
  const columns_popup: IGroupColumnPopup[] = [
    {
      columns: [
        {
          dataField: "SerCode",
          caption: "Mã công việc",
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
          dataField: "SerName",
          caption: "Tên công việc",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập tên !",
          },
        },
        {
          dataField: "StdManHour",
          caption: "Giờ định mức",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Cost",
          caption: "Giá định mức",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Price",
          caption: "Giá bán",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "VAT",
          caption: "VAT",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Note",
          caption: "Ghi chú",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
        {
          dataField: "Model",
          caption: "Model",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập !",
          },
        },
      ],
    },
  ];
  const title_popup: ITitlePopup = {
    title_create: "Tạo mới",
    title_detail: "Chi tiết",
  };
  const onMountInitial = async () => {
    const listMasTwo = await dataSourcePopup.getListCavityType();
    return { listMasTwo: listMasTwo };
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Quản lý danh sách công việc"
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
              isHiddenCheckBox
              showSTT={true}
              fetchData={fetchData}
              autoFetchData={true}
              allowSelection={false}
              keyExpr={"SerCode"}
              storeKey={"MasTwo"}
            />
            <PopupFromGrid
              ref={popupRef}
              onRefetchData={onRefetchData}
              api={api_popup}
              groupColumn={columns_popup}
              title={title_popup}
              onMountInitial={onMountInitial}
              firstDefaultValue
              localeKey="Mas_Two"
              primaryKey={"SerCode"}
            ></PopupFromGrid>
          </ContentSearchPanelLayout.Slot>
        </ContentSearchPanelLayout>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};

export default MasTwo;
