import { SearchParam } from "../clientgate";

export interface Mas_Three {
    PartID: string; 
    PartGroupID: string; 
    PartTypeID: string; 
    PartCode: string;
    VieName: string; 
    EngName: string | null;
    Cost: number; 
    PriceEffect: number;
    VAT: number; 
    Unit: string;
    Location: string | null; 
    MinQuantity: number; 
    Model: string | null; 
    Note: string | null; 
    FreqUsed: string;
    TSTPriceBefore: number;
    TSTPrice: number; 
    PartTypeName: string;
    PartGroupName: string;
    FlagInTST: boolean;
  }
export interface Search_Mas_Three_Param extends Partial<SearchParam> {
    PartCode: string;
    VieName: string; 
    IsActive:string;
    PartGroupID: string; 
    FreqUsed: string;
}
  