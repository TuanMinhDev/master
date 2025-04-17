import { useI18n } from "@/i18n/useI18n";
import { useClientgateApi } from "@/packages/api";
import { useCommonLocale } from "@/packages/hooks/useCommonLocale";
import { showErrorAtom } from "@/packages/store";
import { loadPanelAtom } from "@/packages/store/loadPanel-store";
import { Popup } from "devextreme-react";
import { useSetAtom } from "jotai";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
interface IProps {
  onRefetchData: () => void;
}
const PopupCustomer = forwardRef(({ onRefetchData }: IProps, ref) => {
  const [open, setOpen] = useState(false);

  const { t } = useI18n("Ser_MST_CustomerType");
  const { reset, watch } = useForm<any>({
    defaultValues: {},
  });

  const currentType = watch("Type");

  return (
    <Popup
      visible={open}
      title={
        currentType == "create"
          ? "Tạo mới loại khách hàng"
          : "Chi tiết loại khách hàng"
      }
      showCloseButton={true}
      resizeEnabled={false}
      width={500}
      height={"auto"}
      minHeight={240}
      wrapperAttr={{ class: "popup-from-grid" }}
      id="popup-from-grid"
    >
      <form className="flex flex-col edit_form_v2" id="editForm">
        <div className="flex flex-col">
            {/* <Controller name={"CusPersonType"}/> */}
        </div>
      </form>
    </Popup>
  );
});
export default PopupCustomer;
