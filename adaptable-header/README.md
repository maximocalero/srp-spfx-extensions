## adaptable-header

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

npm i --save @pnp/common@1.2.1 @pnp/graph@1.2.1 @pnp/logging@1.2.1 @pnp/odata@1.2.1 @pnp/sp@1.2.1
npm i srp-react-library-js

Tenant Properties:
"global-navigation"
"top-area-shortcuts"
"pages-header-configuration"

App Catalog
https://sirpointdevs.sharepoint.com/sites/apps-catalog

SharePoint Online Administration
https://sirpointdevs-admin.sharepoint.com

.\Create-SPOTenantPropertyFromJson.ps1 -PropertyKey 'top-area-shortcuts' -AppSiteUrl https://sirpointdevs.sharepoint.com/sites/apps-catalog -Description 'URLs for shortcuts section' -Comment 'To test' -PropertyPathValue ..\jsonFiles\shortcuts.json