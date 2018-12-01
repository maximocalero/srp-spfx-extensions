import * as React from 'react';
import { AdaptableTopAreaProps } from './AdaptableTopAreaProps';
import { AdaptableTopAreaState } from './AdaptableTopAreaState';
import { StringConstants } from '../common/StringConstants';
import { ComponentsToShow } from '../common/enums';
import GlobalNavigation from 'srp-react-library-js/lib/GlobalNavigation';
import Shortcuts from 'srp-react-library-js/lib/Shortcuts';

export default class AdaptableTopArea extends React.Component<AdaptableTopAreaProps, AdaptableTopAreaState > {

    constructor(props: AdaptableTopAreaProps){
        super(props);   
    }

    public render(): React.ReactElement<AdaptableTopAreaProps>{
        return(
            <div>
                {this.props.pageHeaderConfig.styleInjection &&
                    <style >
                        {this.props.pageHeaderConfig.stylesToInject}
                    </style>
                }
                {this.props.title !== StringConstants.Empty &&
                    <h1>{this.props.title}</h1>
                }
                {this.props.pageHeaderConfig.componentsToShow.filter(componentName=> componentName === ComponentsToShow.GlobalNavigation).length > 0 &&
                    <GlobalNavigation title="Global Navigation Example" currentUrl ="this.props.currentUrl" globalNavigationItems = {this.props.globalNavigationItems} />
                }
                {this.props.pageHeaderConfig.componentsToShow.filter(componentName=> componentName === ComponentsToShow.Shortcuts).length > 0 &&
                    <Shortcuts alignment = "right" shortcutItems = {this.props.shortcutItems } />                
                }
            </div>
        );
    }
}