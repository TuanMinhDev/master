import { SearchParam } from "../clientgate";

export interface SerCustomerCare72h {
  CusName: string;
  CusSex: string;
  Address: string;
  Tel: string;
  Mobile: string;
  Email: string;
  ContName: string;
  ContAddress: string;
  ContTel: string;
  ContMobile: string;
  ContEmail: string;
  RONo: string;
  CheckInDate: string;
  ActualDeliveryDate: string;
  PlateNo: string;
  FrameNo: string;
  TradeMarkCode: string;
  ModelName: string;
  ContactDate: string;
  StatusText: string;
  Sex: string;
  Status: string;
  ROID: string;
  CusCareID: string;
  C72Note: any;
  YourCarProblem: any;
  YourSatisfyQSv: any;
  FyourCSSH: any;
  YourRIWN: any;
  WFBasicNeeds: any;
  lst_Ser_CustomerCareMace: SerCustomerCare72h[];
}

export interface Search_SerCustomerCare72h_Param extends SearchParam {
  CusName: string;
  Address: string;
  PlateNo: string;
  FrameNo: string;
  CheckInDateFrom: string;
  CheckInDateTo: string;
  ActualDeliveryDateFrom: string;
  ActualDeliveryDateTo: string;
  Sex: string;
  TradeMarkCode: string;
  ModelName: string;
  FlagPending: any;
  FlagContactedINeedFB: any;
  FlagContactedIFNoB: any;
  FlagReject: any;
  CheckInDateFromTo: [any, any];
  ActualDeliveryDateFromTo: [any, any];
  FlagWH: any;
}
