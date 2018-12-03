import { IDataService, ISearchResult } from "./DataServiceInterfaces";
import { NavigationItem, PageHeaderConfig } from "../common/CommonInterfaces";
import { StringConstants } from "../common/StringConstants";

export class MockDataService implements IDataService{

    public async getNavigation(propertyName: string):Promise<NavigationItem[]> {
        if (propertyName === StringConstants.GlobalNavigationKey){
            return this.globalNavigation();
        }
        if (propertyName === StringConstants.ShortcutsNavigationKey){
            return <NavigationItem[]>this._shorCuts;
        }
    }

    public async getHeaderConfiguration(pageName: string): Promise<PageHeaderConfig> {
        const pagetHeaderConfArray = this.adaptableHeader();
        const pageHeaderConf: PageHeaderConfig[] = pagetHeaderConfArray.filter(pageConf => pageConf.pageName === pageName);

        return pageHeaderConf[0];
    }

    public async getSearchResults(query: string): Promise<ISearchResult[]> {
        let results: ISearchResult[] = [];

        return results;
    }

    private _shorCuts: NavigationItem[] = 
    [
        {
            "name": "My site",
            "url": "https://sirpointdevs-my.sharepoint.com",
            "description": "Onedrive",
            "target": "",
            "className" : "ms-Icon ms-Icon--OneDrive"
        },
        {
            "name": "Office 365 Delve",
            "url": "https://nam.delve.office.com/",
            "description": "Office 365 Delve site",
            "target": "",
            "className" : "ms-Icon ms-Icon--DelveLogo"
        },
        {
            "name": "All Users Directory",
            "url": "https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people",
            "description": "All Users Directory",
            "target": "",
            "className" : "ms-Icon ms-Icon--People"
        }      
    ];

    // private shortCuts = (): NavigationItem[] => {
    //     return (
    //         [
    //             {
    //                 "name": "My site",
    //                 "url": "https://sirpointdevs-my.sharepoint.com",
    //                 "description": "Onedrive",
    //                 "target": "",
    //                 "iconName": "OneDrive",
    //                 "className" : "ms-Icon ms-Icon--OneDrive"
    //             },
    //             {
    //                 "name": "Office 365 Delve",
    //                 "url": "https://nam.delve.office.com/",
    //                 "description": "Office 365 Delve site",
    //                 "target": "",
    //                 "iconName": "DelveLogo",
    //                 "className" : "ms-Icon ms-Icon--DelveLogo"
    //             },
    //             {
    //                 "name": "All Users Directory",
    //                 "url": "https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people",
    //                 "description": "All Users Directory",
    //                 "target": "",
    //                 "iconName": "CompanyDirectory",
    //                 "className" : "ms-Icon ms-Icon--CompanyDirectory"
    //             }
    //         ]            
    //     );
    // }

    private globalNavigation = (): NavigationItem[] => {
        return(
            [
                {
                    "name": "News",
                    "url": "https://sirpointdevs.sharepoint.com/sites/news",
                    "description": "Corporate Company News Portal",
                    "target": ""
                },
                {
                    "name": "Human Resources",
                    "url": "https://sirpointdevs.sharepoint.com/sites/hr",
                    "description": "Human Resources Portal",
                    "target": ""
                },
                {
                    "name": "Learning",
                    "url": "https://sirpointdevs.sharepoint.com/sites/learning",
                    "description": "Learning Portal",
                    "target": ""
                }
            ]            
        );
    }


    private adaptableHeader = (): PageHeaderConfig[] => {
        return (
            [
                {
                    "id": 1,
                    "pageName": "Home.aspx",
                    "componentsToShow": [
                        "globalNavigation",
                        "shortcuts",
                        "adaptableSearchBox"
                    ],
                    "styleInjection": true,
                    "stylesToInject": "[class='ms-compositeHeader root-108 ms-compositeHeader-full']{display:none;}"
                },
                {
                    "id": 1,
                    "pageName": "viewlsts.aspx",
                    "componentsToShow": [
                        "globalNavigation"
                    ],
                    "styleInjection": false,
                    "stylesToInject": ""
                },
                {
                    "id": 1,
                    "pageName": "AllItems.aspx",
                    "componentsToShow": [
                        "globalNavigation"
                    ],
                    "styleInjection": false,
                    "stylesToInject": ""
                }
            ]            
        );
    }

}