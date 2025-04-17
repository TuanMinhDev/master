import { SearchParam } from "../clientgate";

export interface Mas_Two {
  SerCode: string;
  SerName: string;
  SerTypeID: string;
  StdManHour: string;
  Cost: string;
  Price: string;
  VAT: string;
  Model: string;
  Note: string;
  TypeID: string;
  IsActive: string;
}
export interface Search_Mas_Two_Param extends Partial<SearchParam> {
  SerCode: string;
  SerName: string;
  IsActive: string;
  Ft_PageIndex: number;
  Ft_PageSize: number;
}
