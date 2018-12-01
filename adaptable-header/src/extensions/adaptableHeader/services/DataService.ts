import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import { IHttpConfiguration, IDataService } from './DataServiceInterfaces';
import { NavigationItem, PageHeaderConfig } from '../common/CommonInterfaces';
import { StringConstants } from '../common/StringConstants';
import { setup as pnpSetup } from '@pnp/common';
import { sp, StorageEntity } from '@pnp/sp';

export class DataService implements IDataService{
    private spHttpClient: SPHttpClient;
    private siteAbsoluteUrl: string;
    private formDigest: string;
    private context:any;

    constructor(config: IHttpConfiguration){
        this.spHttpClient = config.spHttpClient;
        this.siteAbsoluteUrl = config.siteAbsoluteUrl;
        this.context = config.context;

        pnpSetup({
            spfxContext: this.context,
        });

        sp.setup({
            spfxContext: this.context
        });
    }

    public async getNavigation(propertyName: string):Promise<NavigationItem[]>{
        const jsonTenantProperty:StorageEntity = await sp.web.getStorageEntity(propertyName);
        let globalNavigation:NavigationItem[] = JSON.parse(jsonTenantProperty.Value);

        return globalNavigation;
    }

    public async getHeaderConfiguration(pageName: string): Promise<PageHeaderConfig> {
        const jsonTenantProperty:StorageEntity = await sp.web.getStorageEntity(StringConstants.PagesHeaderConfigurationKey);
        const pagetHeaderConfArray: PageHeaderConfig[] = JSON.parse(jsonTenantProperty.Value);

        const pageHeaderConf: PageHeaderConfig[] = pagetHeaderConfArray.filter(pageConf => pageConf.pageName === pageName);

        return pageHeaderConf[0];
    }
}