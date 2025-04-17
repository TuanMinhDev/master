import { useConfiguration } from "@/packages/hooks";
import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { useEffect, useRef, useState } from "react";
import SearchMasOne from "./search/SearchMasOne";
import PopupFromGrid, {
  IAPI,
  IGroupColumnPopup,
  ITitlePopup,
} from "@/packages/components/popup/PopupFromGrid/PopupFromGrid";
import { DataGrid } from "devextreme-react";
import { useClientgateApi } from "@/packages/api";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { useGridColumns } from "../MasOne/components/use-columns";
import { useMstLocationDataSource } from "../SerCavity/datasource/useDataSource";

const MasOne = () => {
  const popupRef = useRef<any>(null);
  const gridRef = useRef<any>(null);
  const config = useConfiguration();
  // const { isHTV } = usePermissions();
  const api = useClientgateApi();
  const dataSourcePopup = useMstLocationDataSource();

  const searchCondition = useRef<any>({
    GroupCode: "",
    GroupName: "",
    IsActive: "1",
    Ft_PageIndex: 0,
    Ft_PageSize: config.MAX_PAGE_ITEMS,
  });

  const columns = useGridColumns({ data: [], popupRef });

  const handleAdd = () => {
    popupRef.current?.showPopup({
      type: "create",
      data: null,
    });
  };

  const handleSearch = (keyword: string) => {
    searchCondition.current.GroupName = keyword;
    gridRef?.current?.refetchData();
  };

  const fetchData = async () => {
    const response = await api.Mas_One_Search({
      GroupCode: searchCondition.current.GroupCode,
      GroupName: searchCondition.current.GroupName,
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
        GroupCode: formData.GroupCode,
        GroupName: formData.GroupName,
        ParentID: formData.ParentID,
      };
      return api.Mas_One_Create(param);
    },
    api_update: async (formData) => {

      const param = {
        GroupCode: formData.GroupCode,
        GroupName: formData.GroupName,
        PartGroupID: formData.PartGroupID,
        ParentID: formData.ParentID,
      };
      return api.Mas_One_Update(param);
    },
    api_delete: async (formData) => {
      return api.Mas_One_Delete(formData);
    },
  };
  const title_popup: ITitlePopup = {
    title_create: "Tạo mới",
    title_detail: "Chi tiết",
  };
  const columns_popup: IGroupColumnPopup[] = [
    {
      columns: [
        {
          dataField: "GroupCode",
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
          dataField: "GroupName",
          caption: "Tên vật tư",
          editorType: "dxTextBox",
          required: true,
          rules: {
            required: "Vui lòng nhập tên !",
          },
        },
      ],
    },
  ];
  const onMountInitial = async () => {
    const listMasOne = await dataSourcePopup.getListCavityType();
    return { listMasOne: listMasOne };
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Quản lý loại vật tư"
          showSearch={true}
          handleSearch={handleSearch}
          buttonOptions={{
            showButtonAdd: true,
            onClickButtonAdd: handleAdd,
          }}
        />
      </AdminContentLayout.Slot>

      <AdminContentLayout.Slot name={"Content"}>
        
            <GridViewOne
              ref={gridRef}
              dataSource={[]}
              columns={columns}
              allowSelection={false}
              storeKey={"MasOne"}
              fetchData={fetchData}
              autoFetchData={true}
              isHiddenCheckBox
            />
            <PopupFromGrid
              ref={popupRef}
              onRefetchData={onRefetchData}
              api={api_popup}
              groupColumn={columns_popup}
              title={title_popup}
              onMountInitial={onMountInitial}
              firstDefaultValue
              localeKey="Mas_One"
              primaryKey={"PartGroupID"}
            ></PopupFromGrid>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};

export default MasOne;
