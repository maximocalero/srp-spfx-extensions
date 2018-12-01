import { SPHttpClient } from "@microsoft/sp-http";
import { NavigationItem, PageHeaderConfig } from "../common/CommonInterfaces";

export interface IHttpConfiguration{
    spHttpClient: SPHttpClient;
    siteAbsoluteUrl: string;
    context: any;
}

export interface IDataService {
    getNavigation(propertyName: string):Promise<NavigationItem[]>;
    getHeaderConfiguration(pageName: string): Promise<PageHeaderConfig>;
}