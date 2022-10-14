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
    inspectionList: InspectionListInterface[] | [];
    setInspectionList: any;
    isDark: boolean; 
    setIsDark: any;
    retrieveInspectionById: (id: string) => Promise<void> 
    createNewInspection: (data: NewInspectionInterface) => Promise<void>
    deleteInspectionById: (id: string)  => Promise<void>
}

export interface WebCrawlProviderProps {
    children: React.ReactNode
}