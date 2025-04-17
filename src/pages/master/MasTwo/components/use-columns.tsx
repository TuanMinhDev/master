import { useI18n } from "@/i18n/useI18n";
import { requiredType } from "@/packages/common/Validation_Rules";
import { LinkCell } from "@/packages/ui/link-cell";
import { nanoid } from "nanoid";

interface UseGridColumnsProps {
  data: any[];
  popupRef: any;
}
export const useGridColumns = ({ data, popupRef }: UseGridColumnsProps) => {
  const { t } = useI18n("Mas_Two");
  const columns: any[] = [
    {
      dataField: "SerCode",
      caption: "Mã công việc",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: t("Input"),
      },
      visible: true,
      columnIndex: 1,
      groupKey: "BASIC_INFORMATION",
      cellRender: ({ data, value }: any) => {
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
      dataField: "SerName",
      caption: "Tên công việc",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 2,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "StdManHour",
      caption: "Giờ định mức",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 3,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "CavityName",
      caption: "Giờ định mức",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 4,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "Model",
      caption: "Model",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 5,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "Cost",
      caption: "Giá định mức",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 6,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "Price",
      caption: "Giá bán",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 7,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "VAT",
      caption: "VAT",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 8,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "Note",
      caption: "Ghi chú",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 9,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
    {
      dataField: "FlagWarranty",
      caption: "Cờ công việc bảo hành",
      editorOptions: {
        placeholder: t("Input"),
      },
      columnIndex: 10,
      groupKey: "BASIC_INFORMATION",
      visible: true,
    },
  ];
  return columns;
};
