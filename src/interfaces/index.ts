import React from "react";

export interface NewInspectionInterface {
    keyword: string;
}

export interface NewInspectionResponseInterface {
    id: string;
}

export interface InspectionListInterface {
    id: string;
    status: string;
    urls: string[];
}

export interface WebCrawlContextInterface {
    inspectionIdList: NewInspectionResponseInterface[];
    setInspectionIdList: any;
    inspectionList: InspectionListInterface[];
    setInspectionList: any;
    isDark: boolean; 
    setIsDark: any;
    retrieveInspectionById: (id: string) => Promise<void> 
    createNewInspection: (data: NewInspectionInterface) => Promise<void>
}

export interface WebCrawlProviderProps {
    children: React.ReactNode
}