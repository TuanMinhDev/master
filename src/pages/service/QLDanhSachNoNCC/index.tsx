import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { SearchForm } from "./search-form/SearchForm";
import { useRef } from "react";
import { DataGrid } from "devextreme-react";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import { Link } from "@/packages/components/link/link";
import { useClientgateApi } from "@/packages/api";
import { useNetworkNavigate } from "@/packages/hooks";
export const QLDanhSachNoNCC = () => {
  const gridRef: any = useRef<DataGrid | null>(null);
    const navigate = useNetworkNavigate();
  
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
  const handleViewDetail = async (e: any) => {
    const response = await api.QLDanhSachNoNCC_GetBySupplierId(
      e.data.SupplierId, 
      false 
    );
    if(response.isSuccess){
      navigate(`/service/QLDanhSachNoNCC/WH/${e.data.SupplierID}`)
    }
  };

  const api = useClientgateApi();

  const columns: any[] = [
    {
      dataField: "SupplierCode",
      caption: "Mã nhà cung cấp",
      visible: true,
      columnIndex: 1,
      width: 150,
      cellRender: (e: any) => {
        return <Link label={e.value} onClick={() => handleViewDetail(e)} />;
      },
    },
    {
      dataField: "SupplierName",
      caption: "Tên nhà cung cấp",
      visible: true,
      columnIndex: 2,
    },
    {
      dataField: "Address",
      caption: "Địa chỉ",
      visible: true,
      columnIndex: 3,
    },
    {
      dataField: "Deb",
      caption: "Số nợ",
      visible: true,
      columnIndex: 4,
    },
  ];
  const searchCondition = useRef<Partial<any>>({
    SupplierName: "",
    SupplierCode: "",
    SupplierId: "",
    IsDebit: 0,
    Ft_PageIndex: 0,
    Ft_PageSize: 100,
    FlagDataWH: false,
  });
  const fetchData = async () => {
    const respone = await api.QLDanhSachNoNCC_SearchDL({
      SupplierCode: searchCondition.current?.SupplierCode ?? "",
      SupplierName: searchCondition.current?.SupplierName ?? "",
      SupplierId: searchCondition.current?.SupplierId ?? "",
      IsDebit: searchCondition.current?.IsDebit == 0 ? 0 : 1,
      FlagDataWH: searchCondition.current?.FlagDataWH,
      Ft_PageIndex: gridRef?.current?.getDxInstance().pageIndex() ?? 0,
      Ft_PageSize: gridRef?.current?.getDxInstance().pageSize() ?? 100,
    });
    return respone;
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Danh sách nợ nhà cung cấp"
          showSearch={false}
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
              toolbarItems={[]}
              columns={columns}
              fetchData={fetchData}
              allowSelection={false}
              keyExpr={"SupplierId"}
              storeKey={"QLDanhSachNoNCC"}
              autoFetchData={true}
              isHiddenCheckBox
            />
          </ContentSearchPanelLayout.Slot>
        </ContentSearchPanelLayout>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
