import { useClientgateApi } from "@packages/api";
import { VisibilityControl } from "@packages/hooks";
import { showErrorAtom } from "@packages/store";

import { useCommonUtils } from "@/packages/common/CommonUltils";
import { WithSearchPanelLayout } from "@/packages/components/layout/layout-with-search-panel";
import { useCommonLocale } from "@/packages/hooks/useCommonLocale";
import { useDialog } from "@/packages/hooks/useDiaglog";
import { useStylingCommon } from "@/packages/hooks/useStylingCommon";
import CollapseLeftIcon from "@/packages/ui/icons/svg/collapse-left";
import { useSer_RO_Locale } from "@/pages/carservice/Ser_RO/views/locale/Ser_RO_Locale";
import { Popup, ToolbarItem } from "devextreme-react/popup";
import { useSetAtom } from "jotai";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { SearchForm } from "./search-form";
import { SearchResults } from "./search-result";

interface FindDichVuPopupProps {
  onSelectService: (data: any) => void;
}

const initSearchCondition = {
  ServicePackageNo: "",
  ServicePackageName: "",
  Ft_PageIndex: 0,
  Ft_PageSize: 100,
};

export const FindDichVuPopup = forwardRef(
  ({ onSelectService }: FindDichVuPopupProps, ref) => {
    const style = useStylingCommon();
    const showError = useSetAtom(showErrorAtom);
    const commonUtils = useCommonUtils();
    const { Ser_RO_Locale, Ser_ROPartItems_Locale, Ser_ROServiceItems_Locale } =
      useSer_RO_Locale();
    const { commonLocale } = useCommonLocale();
    const { showDialog } = useDialog();

    const [open, setOpen] = useState(false);

    const selectedRef = useRef<any[]>([]);

    useImperativeHandle(ref, () => ({
      showPopup() {
        setOpen(true);
      },
      searchByKeyWord(keyWord: string) {
        setOpen(true);

        searchCondition.current.KeyWord = keyWord;

        gridRef?.current?.refetchData();
      },
    }));
    const gridRef = useRef<any>(null);
    const api = useClientgateApi();

    const searchCondition = useRef<Partial<any>>(initSearchCondition);

    const handleSearch = async (condition: any) => {
      const currentCondition = {
        ...condition,
      };

      searchCondition.current = currentCondition;
      gridRef?.current?.refetchData();
    };

    const onRefetchData = () => {
      gridRef?.current?.refetchData();
    };

    const onContentReady = () => {
      gridRef?.current?.getDxInstance().selectRows(selectedRef.current);
    };

    const onSelectionChanged = (e: any) => {
      console.log(e);

      const selectedRowKeys = e.selectedRowKeys;

      selectedRef.current = selectedRowKeys;
    };

    const fetchData = async () => {
      const resp =
        await api.Ser_ServicePackage_Ser_ServicePackage_Get_SearchCreateRO_DL({
          ...searchCondition.current,
          Ft_PageIndex: gridRef?.current?.getDxInstance().pageIndex() ?? 0,
          Ft_PageSize: gridRef?.current?.getDxInstance().pageSize() ?? 100,
        });

      if (resp.isSuccess) {
        // ;
        const pageIndex = resp.PageIndex;
        const pageSize = resp.PageSize;

        const newDataList = resp.DataList.map((service, index) => {
          if (commonUtils.isNullOrEmpty(service.Factor)) {
            service.Factor = 1;
          }
          return {
            ...service,
            STT: pageIndex * pageSize + index + 1,
          };
        }).sort((a, b) => a.STT - b.STT);

        resp.DataList = newDataList;
        return resp;
      } else {
        showError({
          message: resp._strErrCode,
          _strErrCode: resp._strErrCode,
          _strTId: resp._strTId,
          _strAppTId: resp._strAppTId,
          _objTTime: resp._objTTime,
          _strType: resp._strType,
          _dicDebug: resp._dicDebug,
          _dicExcs: resp._dicExcs,
        });
      }
    };

    const handleSelect = () => {};

    const onHidding = () => {
      searchCondition.current = initSearchCondition;
      setOpen(false);
    };

    const onCloseParentPopup = (data) => {
      setOpen(false);
    };

    const handleSelectService = (e) => {
      const service = e.data;

      onSelectService(service);

      onHidding();
    };

    return (
      <Popup
        visible={open}
        title={"Tìm kiếm gói dịch vụ"}
        showCloseButton={true}
        onHiding={onHidding}
        wrapperAttr={{
          class: "search-car-popup PopupTimKiemChung",
        }}
        height={550}
        width={"95%"}
      >
        <WithSearchPanelLayout
          searchPanelRender={(control) => (
            <SearchForm
              data={searchCondition.current}
              onClose={() => control.close()}
              onSearch={handleSearch}
            />
          )}
          contentPanelRender={(control: VisibilityControl) => (
            <SearchResults
              isLoading={false}
              toolbarItems={[
                {
                  location: "before",
                  render: () => (
                    <div
                      className={style.ICON.ICON_CONTAINER}
                      onClick={() => control.toggle()}
                      style={{
                        marginRight: 10,
                        display: !control.visible ? "flex" : "none",
                      }}
                    >
                      <CollapseLeftIcon reverse />
                    </div>
                  ),
                },
              ]}
              ref={gridRef}
              fetchData={fetchData}
              handleSelectService={handleSelectService}
              onRefetchData={onRefetchData}
              onContentReady={onContentReady}
              onSelectionChanged={onSelectionChanged}
              onCloseParentPopup={onCloseParentPopup}
            />
          )}
        />

        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location={"after"}
          options={{
            text: commonLocale.BUTTON_CANCEL,
            onClick: onHidding,
            elementAttr: {
              class: "search-car-popup cancel-button",
            },
          }}
        />
      </Popup>
    );
  }
);
