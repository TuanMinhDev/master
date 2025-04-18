import { ApiResponse } from "@/packages/types";
import {
  Mas_Three,
  Search_Mas_Three_Param,
} from "@/packages/types/master/Mas_Three";
import { AxiosInstance } from "axios";

export const useMas_ThreeApi = (apiBase: AxiosInstance) => {
  return {
    Mas_Three_GetAllPartGroupName: async (): Promise<
      ApiResponse<Mas_Three>
    > => {
      return await apiBase.post<any, ApiResponse<Mas_Three>>(
        "/SerMSTPartType/GetAllActive",
        {}
      );
    },
    Mas_Three_GetAllPartTypeName: async (): Promise<ApiResponse<Mas_Three>> => {
      return await apiBase.post<any, ApiResponse<Mas_Three>>(
        "/SerMSTPartGroup/GetAllActive",
        {}
      );
    },
    Mas_Three_Search: async (params: Partial<Search_Mas_Three_Param>): Promise<
      ApiResponse<Mas_Three>
    > => {
        return await apiBase.post<any, ApiResponse<Mas_Three>>(
          "/SerMSTPart/SearchDL",
          {
            ...params,
          }
        );
    },
    Mas_Three_Create: async (data: any): Promise<ApiResponse<Mas_Three>> => {
        return await apiBase.post<any, ApiResponse<Mas_Three>>(
          "/SerMSTPart/Create",
          {
            strJson: JSON.stringify(data),
          }
        );
    },
    Mas_Three_Update: async (data: any): Promise<ApiResponse<Mas_Three>> => {
        return await apiBase.post<any, ApiResponse<Mas_Three>>(
          "/SerMSTPart/Update",
          {
            strJson: JSON.stringify(data),
          }
        );
    },
    Mas_Three_Delete: async (params: any): Promise<ApiResponse<Mas_Three>> => {
        return await apiBase.post<any, ApiResponse<Mas_Three>>(
          "/SerMSTPart/Delete",
          {
            ...params,
          }
        );
    },
  };
};
