import { NavigationItem, PageHeaderConfig } from "../common/CommonInterfaces";

export interface AdaptableTopAreaProps{
    title: string;
    elementsToShow?: string[];
    globalNavigationItems: NavigationItem[];
    shortcutItems: NavigationItem[];
    pageHeaderConfig: PageHeaderConfig;
    currentUrl: string;
}