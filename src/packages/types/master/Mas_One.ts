import { SearchParam } from "../clientgate";

export interface Mas_One {
  PartGroupID: number;
  DealerCode: string;
  ParentID: number;
  FamilyID: string;
  OrderID: string;
  GroupCode: string;
  GroupName: string;
  IsActive: string;
  CreatedDate: string;
  CreatedBy: string;
  LogLUDateTime: string;
  LogLUBy: string;
}

export interface Search_Mas_One_Param extends Partial<SearchParam> {
  GroupCode: string;
  GroupName: string;
  IsActive: string;
  Ft_PageIndex: number;
  Ft_PageSize: number;
}
