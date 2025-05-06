import { requiredType } from "@/packages/common/Validation_Rules";
import { Ser_CustomerCar } from "@/packages/types/master/Ser_CustomerCar";
import { LinkCell } from "@/packages/ui/link-cell";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

interface UseGridColumnsProps {
  data: Ser_CustomerCar[];
  popupRef: any;
}

export const useGridColumns = ({ data, popupRef }: UseGridColumnsProps) => {
  const navigate = useNavigate();
  
  const columns: any[] = [
    {
      dataField: "CusID",
      caption: "Mã khác hàng",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 1,
      groupKey: "BASIC_INFORMATION",
      cellRender: ({ data, rowIndex, value }: any) => {
        return (
          <LinkCell
            key={nanoid()}
            onClick={() =>
              navigate(`manageSer_CustomerCar/edit/${value}`)
            }
            value={value}
          />
        );
      },
    },
    {
      dataField: "CusName",
      caption: "Tên khách hàng",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 2,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "DOB",
      caption: "Ngày sinh",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 3,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "Sex",
      caption: "Giới tính",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 4,
      groupKey: "BASIC_INFORMATION",
      cellRender: ({ value }: any) => {
        return value === true ? "Nam" : "Nữ";
      },
    },
    {
      dataField: "PlateNo",
      caption: "Biển số xe",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 5,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "TradeMarkCode",
      caption: "Hiệu xe",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 6,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "ModelName",
      caption: "Model",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 7,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "FrameNo",
      caption: "Số VIN",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 8,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "EngineNo",
      caption: "Số máy",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 9,
      groupKey: "BASIC_INFORMATION",
    },
    {
      dataField: "ProductYear",
      caption: "Đời xe",
      validationRules: [requiredType],
      editorOptions: {
        validationMessageMode: "always",
        placeholder: "Input",
      },
      visible: true,
      columnIndex: 10,
      groupKey: "BASIC_INFORMATION",
    },
  ];
  return columns;
};
