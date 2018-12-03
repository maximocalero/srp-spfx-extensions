import { NavigationItem, PageHeaderConfig } from "../common/CommonInterfaces";
import { IDataService } from "../services/DataServiceInterfaces";

export interface AdaptableTopAreaProps{
    title: string;
    elementsToShow?: string[];
    globalNavigationItems: NavigationItem[];
    shortcutItems: NavigationItem[];
    pageHeaderConfig: PageHeaderConfig;
    currentUrl: string;
    dataService: IDataService;
}