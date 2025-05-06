import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { useRef } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchSer_CustomerCarParam } from "@/packages/types/master/Ser_CustomerCar";
import { DataGrid } from "devextreme-react";
import { useGridColumns } from "./components/use-columns";
import { useClientgateApi } from "@/packages/api";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";

export const Ser_CustomerCar = () => {
  const popupRef = useRef<any>(null);
  let gridRef: any = useRef<DataGrid | null>(null);
  const columns = useGridColumns({ data: [], popupRef });
  const api = useClientgateApi();

  const searchCondition = useRef<Partial<SearchSer_CustomerCarParam>>({
    CusID: "",
    CusName: "",
    DealerCode: "",
    Address: "",
    Phone: "",
    PlateNo: "",
    FrameNo: "",
    EngineNo: "",
    TradeMarkCode: "",
    ModelId: "",
    Ft_PageIndex: 0,
    Ft_PageSize: 100,
  });
  const handleAdd = () => {
    popupRef.current?.showPopup({
      type: "create",
      data: null,
    });
  };
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
  const fetchData = async () => {
    const response = await api.Ser_CustomerCar_SearchDL({
      CusID: searchCondition.current.CusID,
      CusName: searchCondition.current.CusName,
      DealerCode: searchCondition.current.DealerCode,
      Address: searchCondition.current.Address,
      Phone: searchCondition.current.Phone,
      PlateNo: searchCondition.current.PlateNo,
      FrameNo: searchCondition.current.FrameNo,
      EngineNo: searchCondition.current.EngineNo,
      TradeMarkCode: searchCondition.current.TradeMarkCode,
      ModelId: searchCondition.current.ModelId,
      Ft_PageIndex: gridRef?.current?.getDxInstance()?.pageIndex() ?? 0,
      Ft_PageSize: gridRef?.current?.getDxInstance()?.pageSize() ?? 100,
    });
    return response;
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Quản lý khách hàng"
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
              fetchData={fetchData}
              showSTT={true}
              autoFetchData={true}
              allowSelection={false}
              customToolbarItems={[]}
              editMode={false}
              keyExpr={"CusID"}
              storeKey={"Ser_CustomerCar"}
            />
          </ContentSearchPanelLayout.Slot>
        </ContentSearchPanelLayout>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
