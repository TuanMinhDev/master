import { useI18n } from "@/i18n/useI18n";
import { requiredType } from "@/packages/common/Validation_Rules";
import { LinkCell } from "@/packages/ui/link-cell";
import { nanoid } from "nanoid";
interface UseGridColumnsProps {
  data: any[];
  popupRef: any;
}
export const useGridColumns = ({ data, popupRef }: UseGridColumnsProps) => {
  const { t } = useI18n("Mas_Three");
  const columns: any[] = [
    {
      dataField: "PartCode",
      caption: "Mã vật tư",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: t("Input"),
      },
      visible: true,
      columnIndex: 1,
      groupKey: "BASIC_INFORMATION",
      cellRender: ({ data, rowIndex, value }: any) => {
        return (
          <LinkCell
            key={nanoid()}
            onClick={() =>
              popupRef.current?.showPopup({
                type: "detail",
                data: data,
              })
            }
            value={value}
          />
        );
      },
    },
    {
        dataField: "VieName",
        caption: "Tên vật tư",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 2,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "EngName",
        caption: "Tên tiếng anh",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 3,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "PartTypeName",
        caption: "Loại hàng",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 4,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "PartGroupName",
        caption: "Loại vật tư",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 5,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "Unit",
        caption: "Đơn vị",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 6,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "Cost",
        caption: "Giá nhập",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 7,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "PriceEffect",
        caption: "Giá bán",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 8,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "TSTPriceBefore",
        caption: "Giá bán NY từ TST (gần nhất)",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 9,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "TSTPrice",
        caption: "Giá bán NY từ TST (hiện tại)",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 10,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "Location",
        caption: "Vị trí",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 11,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "Model",
        caption: "Model",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 12,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "FreqUsed",
        caption: "Tình trạng sử dụng",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 13,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "Note",
        caption: "Ghi chú",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 14,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },
    {
        dataField: "FreqUsed",
        caption: "Tình trạng sử dụng",
        editorOptions: {
          placeholder: t("Input"),
        },
        columnIndex: 14,
        groupKey: "BASIC_INFORMATION",
        visible: true,
    },


  ];
  return columns;
};
