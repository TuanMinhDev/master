import { Tid } from "@/utils/hash";
import { FlagActiveConvertor } from "@packages/api/interceptors/flag-active-convertor";
import { IUser } from "@packages/types";
import axios, { AxiosError } from "axios";
import { useAuth } from "../contexts/auth";
import { useGetForCurrentUser } from "./clientgate/Api_GetForCurrentUser";
import { useSer_CavityApi } from "./clientgate/master/Ser_Cavity";
import { useSer_MST_CustomerType } from "./clientgate/master/Ser_MST_CustomerType";
import { useCommonApi } from "./common-api";
import { useMas_OneApi } from "./clientgate/master/Mas_One";
import {useMas_TwoApi} from "./clientgate/master/Mas_Two";
/**
 * Creates an axios instance for making requests to the ClientGate API.
 * @param {IUser} currentUser - The current user's information.
 * @param {string} clientGateDomain - The base URL for the ClientGate API.
 * @param {string} networkId - The ID of the network.
 * @param {string} orgId - The ID of the organization.
 * @return {AxiosInstance} An axios instance configured for the ClientGate API.
 */
export const createReportApiBase = (
  currentUser: IUser,
  clientGateDomain: string,
  networkId: string,
  orgId: string
) => {
  const api = axios.create({
    baseURL: clientGateDomain,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      AppAgent: import.meta.env.VITE_AGENT,
      GwUserCode: import.meta.env.VITE_GW_USER,
      GwPassword: import.meta.env.VITE_GW_USER_PW,
      AppVerCode: "V1",
      Tid: Tid(),
      AppTid: Tid(),
      AppLanguageCode: currentUser.Language,
      UtcOffset: currentUser.TimeZone,
      NetworkId: networkId,
      OrgId: orgId,
    },
  });
  api.interceptors.request.use(
    FlagActiveConvertor.beforeRequest,
    function (error) {
      return Promise.reject(error);
    }
  );
  api.interceptors.request.use((config) => {
    config.headers.Tid = Tid();
    config.headers.AppTid = Tid();

    return config;
  });
  api.interceptors.response.use(
    function (response) {
      // with this API, it always falls to this case.
      const data = response.data;
      const result: any = {
        isSuccess: data.Data._strErrCode === "0" && !data.Data._excResult,
        debugInfo: data.Data._dicDebugInfo,
        errorInfo:
          data.Data._strErrCode === "0" ? undefined : data.Data._excResult,
        errorCode: data.Data._strErrCode,
        // customize
        _objTTime: data.Data._objTTime ?? "",
        _strAppTId: data.Data._strAppTId ?? "",
        _strErrCode: data.Data._strErrCode ?? "",
        _strTId: data.Data._strTId ?? "",
        _strType: data.Data._strType ?? "",
        _dicExcs: data.Data._dicExcs ?? {},
        _dicDebug: data.Data._dicDebug ?? {},
      };
      if (
        result.isSuccess &&
        !!data.Data._objResult &&
        !!data.Data._objResult.DataList
      ) {
        result.DataList = data.Data._objResult.DataList.map((item: any) => {
          // if `item` has `FlagActive` property
          if (Object.keys(item).includes("FlagActive")) {
            item.FlagActive = item.FlagActive === "1";
          }
          return {
            ...item,
          };
        });

        result.ItemCount = data.Data._objResult.ItemCount;
        result.PageCount = data.Data._objResult.PageCount;
        result.PageIndex = data.Data._objResult.PageIndex;
        result.PageSize = data.Data._objResult.PageSize;
      } else {
        if (
          !!data.Data?._objResult &&
          typeof data.Data?._objResult === "object"
        ) {
          result.Data = data.Data?._objResult.Data || data.Data?._objResult;
        } else if (typeof data.Data?._objResult !== "string") {
          result.Data = data.Data?._objResult?.map((item: any) => {
            // if `item` has `FlagActive` property
            if (Object.keys(item).includes("FlagActive")) {
              item.FlagActive = item.FlagActive === "1";
            }
            return {
              ...item,
            };
          });
        } else {
          result.Data = data.Data?._objResult;
        }
      }
      return result;
    },
    function (error: AxiosError) {
      if (error?.response?.status === 401) {
        location.href = "/login";
      }
      return Promise.reject(error.response?.data);
    }
  );
  return api;
};
/**
 * Creates an axios instance for making requests to the ClientGate API.
 * @param {IUser} currentUser - The current user's information.
 * @param {string} clientGateDomain - The base URL for the ClientGate API.
 * @param {string} networkId - The ID of the network.
 * @param {string} orgId - The ID of the organization.
 * @return {AxiosInstance} An axios instance configured for the ClientGate API.
 */
export const createClientGateApiBase = (
  currentUser: IUser,
  clientGateDomain: string,
  networkId: string,
  orgId: string
) => {
  const api = axios.create({
    baseURL: clientGateDomain,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      AppAgent: import.meta.env.VITE_AGENT,
      GwUserCode: import.meta.env.VITE_GW_USER,
      GwPassword: import.meta.env.VITE_GW_USER_PW,
      AppVerCode: "V1",
      Tid: Tid(),
      AppTid: Tid(),
      AppLanguageCode: currentUser.Language,
      UtcOffset: currentUser.TimeZone,
      NetworkId: networkId,
      OrgId: orgId,
    },
  });
  api.interceptors.request.use(
    FlagActiveConvertor.beforeRequest,
    function (error) {
      return Promise.reject(error);
    }
  );
  api.interceptors.request.use((config) => {
    config.headers.Tid = Tid();
    config.headers.AppTid = Tid();

    return config;
  });
  api.interceptors.response.use(
    function (response) {
      const data = response.data;
      const result: any = data.Data;
      result.isSuccess = result._strErrCode == "0";
      if (!!data.Data._objResult && !!data.Data._objResult.DataList) {
        result.DataList = data.Data._objResult.DataList.map((item: any) => {
          // if `item` has `FlagActive` property
          if (Object.keys(item).includes("FlagActive")) {
            item.FlagActive = item.FlagActive === "1";
          }
          return {
            ...item,
          };
        });

        result.ItemCount = data.Data._objResult.ItemCount;
        result.PageCount = data.Data._objResult.PageCount;
        result.PageIndex = data.Data._objResult.PageIndex;
        result.PageSize = data.Data._objResult.PageSize;
      } else {
        if (
          data.Data?._objResult &&
          typeof data.Data?._objResult !== "string"
        ) {
          if (data.Data?._objResult.Data) {
            result.Data = data.Data._objResult.Data;
          } else {
            result.Data = data.Data?._objResult.map((item: any) => {
              // if `item` has `FlagActive` property
              if (Object.keys(item).includes("FlagActive")) {
                item.FlagActive = item.FlagActive === "1";
              }
              return {
                ...item,
              };
            });
          }
        } else {
          result.Data = data.Data?._objResult;
        }
      }
      return result;
    },
    function (error: AxiosError) {
      if (error?.response?.status === 401) {
        location.href = "/login";
      }
      return Promise.reject(error.response?.data);
    }
  );

  return api;
};

export const createClientGateApi = (
  currentUser: IUser,
  clientgateDomain: string,
  networkId: string,
  orgId: string
) => {
  const apiBase = createClientGateApiBase(
    currentUser,
    clientgateDomain,
    networkId,
    orgId
  );
  const reportApiBase = createReportApiBase(
    currentUser,
    clientgateDomain,
    networkId,
    orgId
  );

  const commonApi = useCommonApi(apiBase);
  const getCurrentUserApi = useGetForCurrentUser(reportApiBase);
  const ser_MST_CustomerTypeApi = useSer_MST_CustomerType(apiBase);
  const ser_CavityApi = useSer_CavityApi(apiBase);
  const masOneApi = useMas_OneApi(apiBase);
  const masTwoApi = useMas_TwoApi(apiBase);


  /// em phải khao báo object chứa những api em tạo thêm vào đây nhé
  // ví dụ như cavity kia

  /// ở trong createClientGateApi sẽ return toàn bộ object chứa tất cả các api mình nhúng vào

  return {
    ...commonApi,
    ...getCurrentUserApi,
    ...ser_MST_CustomerTypeApi,
    ...ser_CavityApi,
    ...masOneApi,
    ...masTwoApi,
  };
};

export const useClientgateApi = () => {
  const {
    auth: { currentUser, networkId, orgData, clientGateUrl },
  } = useAuth();
  return createClientGateApi(
    currentUser!,
    clientGateUrl!,
    networkId,
    orgData?.Id!
  );
};
