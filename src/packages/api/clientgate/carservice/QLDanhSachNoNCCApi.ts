import { ApiResponse } from "@/packages/types";
import { AxiosInstance } from "axios";

export const useQLDanhSachNoNCCApi = (apiBase: AxiosInstance) => {
  return {
    QLDanhSachNoNCC_SearchDL: async (params: any): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        params.FlagDataWH
          ? "/SerSupplierDebitPayment/SearchWHDL"
          : "/SerSupplierDebitPayment/SearchDL",
        {
          ...params,
        }
      );
    },
    QLDanhSachNoNCC_GetBySupplierId: async (
      code: any,
      flagDataWH: any
    ): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        flagDataWH
          ? "/SerSupplierDebitPayment/GetBySupplierIdWHDL"
          : "/SerSupplierDebitPayment/GetBySupplierIdDL",
        {
          SupplierId: code,
          DealerCode: "",
        }
      );
    },
    QLDanhSachNoNCC_PrintDL: async (
      code: any,
      flagDataWH: any
    ): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        flagDataWH
          ? "/SerSupplierDebitPayment/PrintWHDL"
          : "/SerSupplierDebitPayment/PrintDL",
        {
          PaymentID: code,
          DealerCode: "",
        }
      );
    },
    QLDanhSachNoNCC_DeleteDL: async (code: any): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        "/SerSupplierDebitPayment/DeleteDL",
        {
          PaymentID: code,
          DealerCode: "",
        }
      );
    },
    QLDanhSachNoNCC_UpdateCreateDL: async (
      type: any,
      data: any
    ): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        type
          ? "/SerSupplierDebitPayment/UpdateDL"
          : "/SerSupplierDebitPayment/CreateDL",
        {
          ...data,
        }
      );
    },
    QLDanhSachNoNCC_DeleteDebitDL: async (code: any): Promise<any> => {
      return await apiBase.post<any, ApiResponse<any>>(
        "/SerSupplierDebitPayment/DeleteDebitDL",
        {
          CusDebitID: code,
          DealerCode: "",
        }
      );
    },
  };
};
