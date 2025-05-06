import { AdminContentLayout } from "@/packages/layouts/admin-content-layout";
import { ContentSearchPanelLayout } from "@/packages/layouts/content-searchpanel-layout";
import { GridViewOne } from "@/packages/ui/base-gridview/gridview-one";
import BreadcrumbSearch from "@/packages/ui/header_search/BreadcrumbSearch";
import { SearchForm } from "./search-form/SearchForm";
import { useRef } from "react";
import { DataGrid } from "devextreme-react";
import { Link } from "@/packages/components/link/link";
import { useClientgateApi } from "@/packages/api";
import { Summary, TotalItem } from "devextreme-react/data-grid";
import { useNetworkNavigate } from "@/packages/hooks";

const DanhSachHangBaoHiemNo = () => {
  const gridRef: any = useRef<DataGrid | null>(null);
  const navigate = useNetworkNavigate();
  const api = useClientgateApi();
  const searchCondition = useRef<Partial<any>>({
    InsName: "",
    IsDebit: 0,
    Ft_PageIndex: 0,
    Ft_PageSize: 100,
    FlagDataWH: false,
  });
  const handleSearch = async (data: any) => {
    
    searchCondition.current = {
      ...searchCondition.current,
      ...data,
    };
    gridRef.current?.refetchData();
  };
  const handleViewDetail = async (e: any) => {
    const response = await api.DanhSachHangBaoHiemNo_GetByCusID(
      e.data.InsNo, 
      false 
    );
    console.log(response)
    if(response.isSuccess){
      navigate(`/service/DanhSachHangBaoHiemNo/WH/${e.data.InsNo}`, {
        replace: true
      });
    }
  };
  const columns: any[] = [
    {
      dataField: "InsNo",
      caption: "Mã BH",
      visible: true,
      columnIndex: 1,
      cellRender: (e: any) => {
        console.log("e",e)
        return <Link label={e.value} onClick={() => handleViewDetail(e)} />;
      },
    },
    {
      dataField: "InsVieName",
      caption: "Tên hãng BH",
      visible: true,
      columnIndex: 2,
    },
    {
      dataField: "InsAddress",
      caption: "Địa chỉ",
      visible: true,
      columnIndex: 3,
    },
    {
      dataField: "TelePhone",
      caption: "Điện thoại",
      visible: true,
      columnIndex: 4,
    },
    {
      dataField: "Fax",
      caption: "Fax",
      visible: true,
      columnIndex: 5,
    },
    {
      dataField: "Email",
      caption: "Email",
      visible: true,
      columnIndex: 6,
    },
    {
      dataField: "Website",
      caption: "Website",
      visible: true,
      columnIndex: 7,
    },
    {
      dataField: "DebitAmount",
      caption: "Còn nợ",
      visible: true,
      columnIndex: 8,
      cellRender: (e: any) => {
        const value = Number(e.value) || 0;
        return value.toLocaleString();
      },
    },
  ];
  const fetchData = async () => {
    const respone = await api.DanhSachHangBaoHiemNo_SearchDL({
      InsName: searchCondition.current?.InsName ?? "",
      IsDebit: searchCondition.current?.IsDebit,
      Ft_PageIndex: gridRef?.current?.getDxInstance().pageIndex() ?? 0,
      Ft_PageSize: gridRef?.current?.getDxInstance().pageSize() ?? 100,
      FlagDataWH: searchCondition.current?.FlagDataWH
    });
    return respone
  };
  return (
    <AdminContentLayout>
      <AdminContentLayout.Slot name={"Header"}>
        <BreadcrumbSearch
          title="Danh sách hãng bảo hiểm nợ"
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
              keyExpr={"InsNo"}
              storeKey={"DanhSachHangBaoHiemNo"}
              autoFetchData={true}
              isHiddenCheckBox
            >
              <Summary>
                <TotalItem
                  column="DebitAmount"
                  summaryType="sum"
                  valueFormat="#,##0.###"
                  displayFormat="Tổng: {0}"
                  cssClass="count__summary"
                  customizeText={(itemInfo) => {
                    return `Tổng: ${new Intl.NumberFormat('vi-VN').format(itemInfo.value)}`;
                  }}
                />
              </Summary>
            </GridViewOne>
          </ContentSearchPanelLayout.Slot>
        </ContentSearchPanelLayout>
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
export default DanhSachHangBaoHiemNo;
