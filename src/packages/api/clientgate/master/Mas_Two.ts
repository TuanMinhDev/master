import { ApiResponse } from "@/packages/types";
import { Mas_Two, Search_Mas_Two_Param } from "@/packages/types/master/Mas_Two";
import { AxiosInstance } from "axios";

export const useMas_TwoApi = (apiBase: AxiosInstance) => {
  return {
    Mas_Two_Search: async (
      params: Partial<Search_Mas_Two_Param>
    ): Promise<ApiResponse<Mas_Two>> => {
      return await apiBase.post<
        Partial<Search_Mas_Two_Param>,
        ApiResponse<Mas_Two>
      >("/SerMSTService/SearchDL", {
        ...params,
      });
    },
    Mas_Two_Create: async (data: any): Promise<ApiResponse<Mas_Two>> => {
      return await apiBase.post<any, ApiResponse<Mas_Two>>(
        "/SerMSTService/Create",
        {
          strJson: JSON.stringify(data),
        }
      );
    },
    Mas_Two_Update: async (data: any): Promise<ApiResponse<Mas_Two>> => {
        return await apiBase.post<any, ApiResponse<Mas_Two>>(
          "/SerMSTService/Update",
          {
            strJson: JSON.stringify(data),
          }
        );
    },
    Mas_Two_Delete: async (params: any): Promise<ApiResponse<Mas_Two>> => {
        return await apiBase.post<any, ApiResponse<Mas_Two>>(
          "/SerMSTService/Delete",
          {
            ...params,
          }
        );
    },
  };
};
