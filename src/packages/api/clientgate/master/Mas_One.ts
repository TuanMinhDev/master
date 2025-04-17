import { ApiResponse } from "@/packages/types";
import { Mas_One, Search_Mas_One_Param } from "@/packages/types/master/Mas_One";
import { AxiosInstance } from "axios";

export const useMas_OneApi = (apiBase: AxiosInstance) => {
  return {
    Mas_One_Search: async (
      params: Partial<Search_Mas_One_Param>
    ): Promise<ApiResponse<Mas_One>> => {
      return await apiBase.post<
        Partial<Search_Mas_One_Param>,
        ApiResponse<Mas_One>
      >("/SerMSTPartGroup/SearchDL", {
        ...params,
      });
    },

    Mas_One_Create: async (data: any): Promise<ApiResponse<Mas_One>> => {
      return await apiBase.post<any, ApiResponse<Mas_One>>(
        "/SerMSTPartGroup/Create",
        {
          strJson: JSON.stringify(data),
        }
      );
    },

    Mas_One_Update: async (data: any): Promise<ApiResponse<Mas_One>> => {
      return await apiBase.post<any, ApiResponse<Mas_One>>(
        "/SerMSTPartGroup/Update",
        {
          strJson: JSON.stringify(data),
        }
      );
    },
    Mas_One_Delete: async (params: any): Promise<ApiResponse<Mas_One>> => {
      return await apiBase.post<any, ApiResponse<Mas_One>>(
        "/SerMSTPartGroup/Delete",
        {
          ...params,
        }
      );
    },
  };
};
